const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');
const Model = require('./model.js');
const cors = require('cors');

const app = express();
const port = 3004;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.get('/:index', (req, res) => {
//   Model.initialize(req.params.index, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.redirect('/').send(data);
//     }
//   });
// });

app.get('/moreHomes/:index', (req, res) => {
  Model.initialize(req.params.index, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => console.log(`Ahoy cap't! Ready and Willing at port ${port}!!`));
