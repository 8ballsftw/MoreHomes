const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser')
const path = require('path');
const db = require('../db/index.js')

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.end();
});

app.get('/homeInfo/:property_id', (req, res) => {
    db.getHomeInfo(req.params.property_id, (err, succ) => {
      if (err) {
        throw err;
        res.status(404).send(err);
      } else {
        res.status(200).send(succ)
      }
    });
  }
);

app.put('/init', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

app.listen(port, () => console.log(`Ahoy cap't! Ready and Willing at port ${port}!!`))