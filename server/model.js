const db = require('../db/index.js');

const initialize = (idx, callback) => {
  // creating array of random houses
  // could change this to a function that actually finds related homes rather than random
  const moreHomes = [];
  while (moreHomes.length < 12) {
    const rand = Math.floor(Math.random() * 100) + 1
    if (moreHomes.indexOf(rand) === -1 && rand !== idx) moreHomes.push(rand);
  }

  const response = [];
  let responseCount = 0;
  moreHomes.forEach((home, index) => {
    db.getHomeInfo(moreHomes[index], (err, info) => {
      if (err) {
        callback(err);
      } else {
        response[index] = info[0];
        responseCount += 1;
        if (responseCount === moreHomes.length) {
          callback(null, response);
        }
      }
    });
  });
};

const photoUrl = (cb) => {
  db.query(`select home_id, file_url from photo_info;`, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      cb(null, info);
    }
  })
}

module.exports.initialize = initialize;
module.exports.photoUrl = photoUrl;