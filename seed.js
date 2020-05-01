const db = require('./db/index.js');
const awsDB = require('./db/aws.js');

const seeder = (idx) => {
  const title = () => {
    let result = '';
    const adjectives = ['Luxurious', 'Captivating', 'Impeccable', 'Stainless', 'Basketball', 'Landscaped', 'Pergola', 'Remodeled', 'Beautiful', 'Gentle', 'Spotless', 'Tiled', 'Updated'];
    const nouns = ['house', 'room', 'apartment', 'condo', 'condominium', 'townhouse', 'castle', 'mansion', 'beach house', 'fancy tent', 'skihaus'];
    const bonuses = ['pool', 'bbq', 'hot tub', 'tennis court', 'yard'];
    const selector = (arr) => {
      const rand = Math.floor(Math.random() * arr.length);
      if (arr[0] === 'pool') {
        if (Math.random() > 0.75) return ` with a ${arr[rand]}`;
      }
      return arr[rand];
    };
    result += `${selector(adjectives)} ${selector(nouns)}${selector(bonuses)}`;
    return result;
  };

  const type = () => {
    const arr = ['entire house', 'entire bungalow', 'entire apartment', 'entire condominium', 'entire townhouse', 'entire guest suite', 'tiny house', 'private room', 'shared room'];
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const randNum = (low, high) => Math.floor(Math.random() * (high - low) + low);

  const plus = () => {
    let rand = randNum(0, 2);
    if (rand === 1) {
      if (Math.random() < 0.65) rand = 0;
    }
    return rand;
  };

  let rating = (randNum(275, 500) / 100);
  const beds = randNum(1, 25);
  const ratingNum = randNum(0, 100);
  if (ratingNum === 0) rating = null;
  const price = randNum(25, 1200);
  const isPlus = plus();

  db.seed(`INSERT INTO home_info (home_id, title, home_type, beds, rating, rating_num, price, is_plus) VALUES (${idx}, "${title()}", "${type()}", ${beds}, ${rating}, ${ratingNum}, ${price}, ${isPlus});`);
};

for (let i = 0; i < 100; i += 1) {
  seeder(i + 1);
}

awsDB.photoSeed();
