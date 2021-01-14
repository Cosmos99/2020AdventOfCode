const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('absdasdasd');
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening on port ${PORT} ...`);
});
