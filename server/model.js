const db = require('../db/index.js');

const initialize = (array, callback) => {
  const arr = JSON.parse(array);
  const response = [];
  let responseCount = 0;
  // async mapping
  arr.forEach((home, index) => {
    db.getHomeInfo(arr[index], (err, info) => {
      if (err) {
        callback(err);
      } else {
        response[index] = info[0];
        responseCount += 1;
        if (responseCount === arr.length) {
          callback(null, response);
        }
      }
    });
  });
};

module.exports.initialize = initialize;
