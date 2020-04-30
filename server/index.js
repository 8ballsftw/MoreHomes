const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser')
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.end();
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))