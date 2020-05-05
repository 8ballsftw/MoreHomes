const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'home_data',
});

connection.connect();

// would like to split this out into a few different functions
const insertOne = (q, callback) => {
  connection.query(q, callback);
};

// getting the info for one home
// ideally would refactor this to a promise chain
const getHomeInfo = (id, callback) => {
  connection.query(`SELECT * FROM home_info WHERE home_id = ${id}`, (err, response) => {
    if (err) {
      callback(err);
    } else if (response.length === 0) {
      callback(response);
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
          response[0].photos = photos;
          callback(null, response);
        }
      });
    }
  });
};

module.exports.getHomeInfo = getHomeInfo;
module.exports.insertOne = insertOne;
