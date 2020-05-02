const db = require('../db/index.js');

const initialize = (arr, callback) => {
  let response = [];
  arr = JSON.parse(arr)
  arr.map((id, index) => {
    db.getHomeInfo(id, (err, info) => {
      if (err) {
        callback(err);
      } else {
        response.push(info[0]);
        if (index === arr.length - 1) {
          callback(null, response);
        }
      }
    });
  });
};



module.exports.initialize = initialize;