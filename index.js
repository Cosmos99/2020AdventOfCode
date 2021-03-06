const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname+'/static/homepage.html');
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening...`);
});
