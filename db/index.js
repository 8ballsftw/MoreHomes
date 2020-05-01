var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'home_data'
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   //console.log('The solution is: ', results[0].solution);
// });

let seed = (q) => {
  connection.query(q, (err, res) => {
    if (err) throw err;
    console.log('success!')
  })

}

//getting the info for one home
let getHomeInfo = (id, callback) => {
  connection.query(`SELECT * FROM home_info WHERE home_id = ${id}`, (err, res) => {
    if (err) {
      callback(err)
    } else {
      //console.log(res[0].home_id);
      connection.query(`SELECT * FROM photo_info WHERE home_id = ${id}`, (err, succ) => {
        if (err) {
          callback(err)
        } else {
          let photos = [];
          succ.map(photo => {
            photos.push(photo.file_url);
          })
          res[0].photos = photos;
          callback(null, res);
        }
      })
    }
  });
}

module.exports.getHomeInfo = getHomeInfo;
module.exports.seed = seed;