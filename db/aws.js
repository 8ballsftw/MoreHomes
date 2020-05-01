const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

let s3 = new AWS.S3({apiVersion: '2006-03-01'});

let photoDir = path.join(__dirname, '../homePhotos/')

fs.readdir(photoDir, (err, folders) => {
  if (err) {
    console.log(err)
  } else {
    let fileArr = []
    folders.shift()
    folders.map((folder, index) => {
      let parent = index;
      fs.readdir(photoDir + folder, (err, files) => {
        if (err) {
          console.log(err)
        } else {
          if (files[0] !== '.DS_Store')
          files.forEach(file => {
            if (file === '.DS_Store') {
              null
            } else {\
              let currKey = `${parent}-${file}`
              s3.upload({
                Bucket: `airbnb-project-photos/testing/${parent}`,
                Key: currKey,
                Body: fs.readFileSync(`${photoDir}${folder}/${file}`),
                ContentType: 'image/jpeg',
                ACL: 'public-read'
              }, (err, succ) => {
                if (err) {
                  console.log(err)
                } else {
                  console.log(succ.Location)
                }
              })
            }
          })
        }
      })
    });
  }
})



