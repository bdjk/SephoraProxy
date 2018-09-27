const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 3005;
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));

// app.get('/product', (req, res) => {
//   axios
//     .get('http://localhost:5000/product', req.params)
//     .then(data => res.send(data.data))
//     .catch(err => res.status(404).send(err));
// });

app.get('/api', (req, res) => {
  axios
    .get('http://ec2-54-183-96-251.us-west-1.compute.amazonaws.com:4000/api', {
      params: req.query
    })
    .then(data => res.send(data.data))
    .catch(err => res.status(404).send(err));
});

// app.get('/api/mydb', (req, res) => {
//   axios
//     .get('http://localhost:7777/api/mydb', req.params)
//     .then(data => res.send(data.data))
//     .catch(err => res.status(404).send(err));
// });
// app.get('/review', (req, res) => {
//   axios
//     .get('http://localhost:3000/review', req.params)
//     .then(data => res.send(data.data))
//     .catch(err => res.status(404).send(err));
// });

app.listen(PORT, (err, result) => {
  if (err) {
    console.log('error happened', err);
  } else {
    console.log('connection established listening to port: ', PORT);
  }
});
