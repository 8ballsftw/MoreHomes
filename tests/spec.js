const puppeteer = require('puppeteer');
const db = require('../db/index.js');
const URL = 'http://localhost:3004';

describe('db testing', () => {
  let q = `INSERT INTO home_info (home_id, title, home_type, beds, rating, rating_num, price, is_plus) VALUES (200, "test home", "test home", 1, 1.50, 1, 100, 0);`
  db.insertOne(q, ()=>{});
  let result = null;
  db.getHomeInfo(200, (err, succ) => {
    if (err) throw err;
    result = succ[0];
    //console.log('result', result)
    test('insertOne inserts... one', () => {
      expect(result).toBeDefined();
    });
  })
  //console.log(result);




  //db.insertOne('delete from home_info where home_id = 200;', (err, succ) => {console.log(succ)});
});