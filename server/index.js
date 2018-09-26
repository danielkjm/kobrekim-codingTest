const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path');
const data = require('./data.js');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/president', async (req, res, next) => {
  try {
    await res.json(data[0]);
  } catch (err) {
    console.log(err);
  }
});

app.get('/api/secondTier', async (req, res, next) => {
  try {
    await res.json(data[0].manager);
  } catch (err) {
    console.log(err);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/index.html'));
});

app.listen(port, function() {
  console.log(`Your server, listening on port ${port}`);
});
