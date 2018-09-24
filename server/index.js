const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path');
const data = require('./data.js');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/president', (req, res, next) => {
  res.json(data[0]);
});

app.get('/api/secondTier', (req, res, next) => {
  res.json(data[0].manager);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/index.html'));
});

app.listen(port, function() {
  console.log(`Your server, listening on port ${port}`);
});
