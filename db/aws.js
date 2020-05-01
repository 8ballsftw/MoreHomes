const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const db = require('./index.js');

let s3 = new AWS.S3({apiVersion: '2006-03-01'});

let photoDir = path.join(__dirname, '../homePhotos/')

let photoSeed = () => {
  fs.readdir(photoDir, (err, folders) => {
    if (err) {
      console.log(err)
    } else {
      for (var i = 0; i < 4; i++) { // iterate through folder 4 times (25 houses, need 100 entries)
        folders.map((folder, index) => {
          if (folder !== '.DS_Store') { //ignore ds_store
            let idx = (index + (i * 25)).toString(); // zero-padding
            if (idx.length === 1) {
              idx = '00' + idx;
            } else if (idx.length === 2) {
              idx = '0' + idx;
            }
            //console.log(idx);
            fs.readdir(photoDir + folder, (err, files) => {
              if (err) {
                console.log(err)
              } else {
                files.forEach(file => {
                  if (file !== '.DS_Store') { //ignore ds_store
                    let currKey = `${idx}-${file.substring(0, 8)}` //trim file name for key
                    s3.upload({ //params
                      Bucket: `airbnb-project-photos/${idx}`,
                      Key: currKey,
                      Body: fs.readFileSync(`${photoDir}${folder}/${file}`),
                      ContentType: 'image/jpeg',
                      ACL: 'public-read'
                    }, (err, succ) => {
                      if (err) {
                        console.log(err)
                      } else {
                        let home_id = parseInt(idx);
                        db.seed(`INSERT INTO photo_info (home_id, file_url) values (${home_id}, "${succ.Location}")`)
                        console.log(succ.Location);
                      }
                    })
                    //console.log('currKey', currKey);
                  }
                })
              }
            })
          }
        });
      }
    }
  })
}
photoSeed();


module.exports.photoSeed = photoSeed;