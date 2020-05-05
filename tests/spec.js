// const puppeteer = require('puppeteer');
// const db = require('../db/index.js');
// const URL = 'http://localhost:3004';

// describe('db testing', () => {
//   let q = `INSERT INTO home_info (home_id, title, home_type, beds, rating, rating_num, price, is_plus) VALUES (200, "test home", "test home", 1, 1.50, 1, 100, 0);`
//   db.insertOne(q, ()=>{});
//   let result = null;
//   db.getHomeInfo(200, (err, succ) => {
//     if (err) throw err;
//     result = succ[0];
//     //console.log('result', result)
//     test('insertOne inserts... one', () => {
//       expect(result).toBeDefined();
//     });
//   })
//   //console.log(result);




//   //db.insertOne('delete from home_info where home_id = 200;', (err, succ) => {console.log(succ)});
// });


import React from 'react';
import { shallow } from 'enzyme';

// Components
import Photo from '../client/src/components/photo';

function setup() {
  let home = {
    "home_id": 1,
    "title": "Pergola house with a pool",
    "home_type": "entire house",
    "beds": 12,
    "rating": 4.17,
    "rating_num": 95,
    "price": 29,
    "is_plus": 0,
    "photos": [
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-0ea2f48b",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-11ce293c",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-ee91458b",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-9eb5722f",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-b0a34c1c",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-0a278002",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-9a32a771",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-CCE03112",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-7674fc69",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-9562a822",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-a1f99d03",
        "https://airbnb-project-photos.s3.amazonaws.com/1/1-f07dac97"
    ]
  };
  let photo = 0;
  let homeId = 0;
  const wrapper = shallow(<Photo home={home} photo={photo} homeId={homeId}/>);
  return { wrapper };
}

describe('Photo Test Suite', () => {
  it('should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should have a photo counter', () => {
    const { wrapper } = setup();
    const instance = wrapper.instance();
    expect(wrapper.prop('photo')).to.equal(0);
  });

});
