const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/static/homepage.html');
});


app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/ ...');
});
