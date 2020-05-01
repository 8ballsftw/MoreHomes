const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'home_data',
});

connection.connect();

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
      // console.log(res[0].home_id);
      connection.query(`SELECT * FROM photo_info WHERE home_id = ${id}`, (err, succ) => {
        if (err) {
          callback(err);
        } else {
          const photos = [];
          succ.forEach((photo) => {
            photos.push(photo.file_url);
          });
          res[0].photos = photos;
          callback(null, res);
        }
      });
    }
  });
};

module.exports.getHomeInfo = getHomeInfo;
module.exports.seed = seed;
