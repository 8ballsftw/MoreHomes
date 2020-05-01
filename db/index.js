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
  //connection.end();
}

//

module.exports.seed = seed;