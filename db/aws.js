const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

let s3 = new AWS.S3({apiVersion: '2006-03-01'});

let photoDir = path.join(__dirname, '../homePhotos/')

fs.readdir(photoDir, (err, folders) => {
  if (err) {
    console.log(err)
  } else {
    folders.shift()
    folders.map((folder, index) => {
      let parent = (index + 1).toString(); // zero-padding
      if (parent.length === 1) {
        parent = '00' + parent;
      } else if (parent.length === 2) {
        parent = '0' + parent;
      }
      fs.readdir(photoDir + folder, (err, files) => {
        if (err) {
          console.log(err)
        } else {
          files.forEach(file => {
            if (file !== '.DS_Store') {
              let currKey = `${parent}-${file.substring(0, 10)}`
              s3.upload({ //params
                Bucket: `airbnb-project-photos/${parent}`,
                Key: currKey,
                Body: fs.readFileSync(`${photoDir}${folder}/${file}`),
                ContentType: 'image/jpeg',
                ACL: 'public-read'
              }, (err, succ) => {
                if (err) {
                  console.log(err)
                } else {
                  console.log(succ.Location) // active photo url
                }
              })
            }
          })
        }
      })
    });
  }
})



