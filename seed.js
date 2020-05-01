const db = require('./db/index.js');
/*
weighted random:
function weightedRandom(prob) {
  let i, sum=0, r=Math.random();
  for (i in prob) {
    sum += prob[i];
    if (r <= sum) return i;
  }
}
let result = weightedRandom({0:0.6, 1:0.1, 2:0.1, 3:0.2}); //sums must add to 1
*/

/*
  home_id int NOT NULL AUTO_INCREMENT,  -- auto incre
  title VARCHAR(255),                   -- word array
  home_type VARCHAR(255),               -- ['entire house', 'entire bungalow', 'entire apartment', 'entire condominium', 'entire townhouse', 'entire guest suite', 'tiny house', , 'private room', 'shared room']
  beds int,                             -- random number, 1 - 25
  rating DECIMAL(3, 2),                 -- random number, 275 - 500 / 100 (null if rating_num rolls 0)
  rating_num int,                       -- random number, 0 - 200
  price int,                            -- random number, 35 - 600
  is_plus int,                          -- either 0 or 1, tends to 0
  PRIMARY KEY (home_id)
*/


let seeder = () => {

  let title = () => {
    let result = '';
    let adjectives = ['Luxurious', 'Captivating', 'Impeccable', 'Stainless', 'Basketball', 'Landscaped', 'Pergola', 'Remodeled', 'Beautiful', 'Gentle', 'Spotless', 'Tiled', 'Updated']
    let nouns = ['house', 'room', 'apartment', 'condo', 'condominium', 'townhouse', 'castle', 'masion', 'beach house', 'skihaus']
    let bonuses = ['pool', 'bbq', 'hot tub', 'tennis court', 'yard']
    let selector = (arr) => {
      let rand = Math.floor(Math.random() * arr.length);
      if (arr[0] === 'pool') {
        if (Math.random() < .75) {
          return ''
        } else {
          return ' with a ' + arr[rand];
        }
      }
      return arr[rand]
    }
    return result += `${selector(adjectives)} ${selector(nouns)}${selector(bonuses)}`
  }

  let type = () => {
    let arr = ['entire house', 'entire bungalow', 'entire apartment', 'entire condominium', 'entire townhouse', 'entire guest suite', 'tiny house', 'private room', 'shared room'];
    return arr[Math.floor(Math.random() * arr.length)]
  }

  let randNum = (low, high) => {
    return Math.floor(Math.random() * (high - low) + low);
  }

  let plus = () => {
    let rand = randNum(0, 2)
    if (rand === 1) {
      if (Math.random() < .7) rand = 0;
    }
    return rand;
  }

  let beds = randNum(1, 25);
  let rating = (randNum(275, 500) / 100);
  let ratingNum = randNum(0, 100);
  let price = randNum(25, 800);
  let isPlus = plus();

  db.seed(`INSERT INTO home_info (title, home_type, beds, rating, rating_num, price, is_plus) VALUES ("${title()}", "${type()}", ${beds}, ${rating}, ${ratingNum}, ${price}, ${isPlus});`)
}

for (var i = 0; i < 100; i++) {
  seeder();
}