const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path');
const data = require('./data.js');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/api/chart', (req, res, next) => {
  res.json(data);
});

app.listen(port, function() {
  console.log(`Your server, listening on port ${port}`);
});
