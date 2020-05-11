const db = require('./db/index.js');
const awsDB = require('./db/aws.js');

const seeder = (idx) => {
  const title = () => {
    let result = '';
    const adjectives = ['Luxurious', 'Captivating', 'Impeccable', 'Stainless', 'Basketball', 'Landscaped', 'Pergola', 'Remodeled', 'Beautiful', 'Gentle', 'Spotless', 'Tiled', 'Updated', 'Best', 'Huge', 'Luxury'];
    const nouns = ['house', 'room', 'apartment', 'condo', 'condominium', 'townhouse', 'castle', 'mansion', 'beach house', 'fancy tent', 'skihaus'];
    const bonuses = ['pool', 'bbq', 'hot tub', 'tennis court', 'yard', 'porch', 'outhouse', 'garage', 'deck'];
    const selector = (arr) => {
      const rand = Math.floor(Math.random() * arr.length);
      if (arr[0] === 'pool') {
        if (Math.random() > 0.75) return ` with a ${arr[rand]}`;
        return '';
      }
      return arr[rand];
    };
    result += `${selector(adjectives)} ${selector(nouns)}${selector(bonuses)}`;
    return result;
  };

  const type = () => {
    const arr = ['Entire house', 'Entire bungalow', 'Entire apartment', 'Entire condominium', 'Entire townhouse', 'Entire guest suite', 'Tiny house', 'Private room', 'Shared room'];
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const randNum = (low, high) => Math.floor(Math.random() * (high - low) + low);

  const plus = () => {
    let rand = randNum(0, 2);
    if (rand === 1) {
      if (Math.random() < 0.75) rand = 0;
    }
    return rand;
  };

  let rating = (randNum(275, 501) / 100).toString();
  if (rating.length === 1) rating = `${rating}.0`;
  const beds = randNum(1, 25);
  const ratingNum = randNum(0, 100);
  if (ratingNum === 0) rating = null;
  const price = randNum(25, 1200);
  const isPlus = plus();

  db.insertOne(`INSERT INTO home_info (home_id, title, home_type, beds, rating, rating_num, price, is_plus) VALUES (${idx}, "${title()}", "${type()}", ${beds}, ${rating}, ${ratingNum}, ${price}, ${isPlus});`, (err, succ) => {
    if (err) {
      throw err
    } else {
      console.log(succ);
    }
  });
};

for (let i = 1; i <= 100; i += 1) {
  seeder(i);
};

awsDB.photoSeed();
