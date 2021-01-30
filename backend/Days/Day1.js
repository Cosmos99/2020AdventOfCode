const express = require('express');
const router = express.Router();

const number = 1;
const description = 'Lorem ipsum \n solor sit damet!';
const link = 'https://adventofcode.com/2020/day/1';

router.get('/', (req, res) =>{
  res.render('day', {number, description, link});
});


module.exports = router;
