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

app.get('/homeInfo/:property_id', (req, res) => {
  db.getHomeInfo(req.params.property_id, (err, succ) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(succ);
    }
  });
});

app.put('/init', (req, res) => {
  Model.initialize(req.body.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => console.log(`Ahoy cap't! Ready and Willing at port ${port}!!`));
