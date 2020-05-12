const db = require('../db/index.js');

const initialize = (idx, callback) => {
  console.log(idx)
  // creating array of random houses
  // could change this to a function that actually finds related homes rather than random
  const moreHomes = [];
  while (moreHomes.length < 12) {
    const rand = Math.floor(Math.random() * 100) + 1
    if (moreHomes.indexOf(rand) === -1 && rand !== idx) moreHomes.push(rand);
  }

  const response = [];
  let responseCount = 0;
  // async mapping
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

module.exports.initialize = initialize;
