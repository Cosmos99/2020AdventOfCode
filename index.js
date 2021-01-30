const express = require('express');
const path = require('path');
const dayRoutes = require('./backend/Days/Day1');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use('/Days/1', dayRoutes);


app.get('/', (req, res) => {
  res.status(200).sendFile('/homepage.html', {root: __dirname+'/static'});
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening...`);
});
