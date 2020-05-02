const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'home_data',
});

connection.connect();

// only used for seeding the DB
const seed = (q) => {
  connection.query(q, (err) => {
    if (err) throw err;
    console.log('success!');
  });
};

// getting the info for one home
const getHomeInfo = (id, callback) => {
  connection.query(`SELECT * FROM home_info WHERE home_id = ${id}`, (err, res) => {
    if (err) {
      callback(err);
    } else {
      connection.query(`SELECT * FROM photo_info WHERE home_id = ${id}`, (err, succ) => {
        if (err) {
          callback(err);
        } else {
          const photos = [];
          // iterate through the info returned from photo_info
          succ.forEach((photo) => {
            // pull out the photo urls
            photos.push(photo.file_url);
          });
          // add a photos property with the array of urls to the response object
          res[0].photos = photos;
          callback(null, res);
        }
      });
    }
  });
};

module.exports.getHomeInfo = getHomeInfo;
module.exports.seed = seed;
