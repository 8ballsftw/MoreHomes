const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const db = require('./index.js');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const photoDir = path.join(__dirname, '../homePhotos/');

const photoSeed = () => {
  fs.readdir(photoDir, (err, folders) => {
    if (err) {
      throw err;
    } else {
      // iterate through folder 4 times (25 houses, need 100 entries)
      for (let i = 0; i < 4; i += 1) {
        folders.forEach((folder, index) => {
          // ignore .DS_Store
          if (folder !== '.DS_Store') {
            // zero-padding
            let idx = (index + (i * 25)).toString();
            if (idx.length === 1) {
              idx = `00${idx}`;
            } else if (idx.length === 2) {
              idx = `0${idx}`;
            }
            fs.readdir(photoDir + folder, (err, files) => {
              if (err) {
                throw err;
              } else {
                files.forEach((file) => {
                  // ignore .DS_Store
                  if (file !== '.DS_Store') {
                    // trim file name for key
                    const currKey = `${idx}-${file.substring(0, 8)}`;
                    // params
                    s3.upload({
                      Bucket: `airbnb-project-photos/${idx}`,
                      Key: currKey,
                      Body: fs.readFileSync(`${photoDir}${folder}/${file}`),
                      ContentType: 'image/jpeg',
                      ACL: 'public-read',
                    }, (err, succ) => {
                      if (err) {
                        throw err;
                      } else {
                        const homeId = parseInt(idx, 10);
                        db.seed(`INSERT INTO photo_info (home_id, file_url) values (${homeId}, "${succ.Location}")`);
                        console.log(succ.Location);
                      }
                    });
                    // console.log('currKey', currKey);
                  }
                });
              }
            });
          }
        });
      }
    }
  });
};

module.exports.photoSeed = photoSeed;
