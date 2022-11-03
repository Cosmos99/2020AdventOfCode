const express = require('express');

const router = express.Router();

// Day Requires
const day1 = require('./Day1');
const day2 = require('./Day2');
const day3 = require('./Day3');
const day4 = require('./Day4');
const day5 = require('./Day5');

const days = [];
days.push(day1);
days.push(day2);
days.push(day3);
days.push(day4);
days.push(day5);
days.push(require('./Day6'));
days.push(require('./Day7'));

router.get('/', (req, res) =>{
  res.status(404).render('NotFound');
});

router.get('/:dayNumber', (req, res) =>{
  dayNumber = req.params['dayNumber'];
  if (dayNumber<=0 || dayNumber>7) {
    res.status(404).render('NotFound');
    return;
  }
  description = days[dayNumber-1].description;
  link = days[dayNumber-1].link;
  res.render('day', {dayNumber, description, link});
});

router.post('/B_:dayNumber', (req, res) =>{
  dayNumber = req.params['dayNumber'];
  const solution = days[dayNumber-1].getSolution2();
  console.log('SOLUTION 2: ' + solution);
  res.json(solution);
});

router.post('/:dayNumber', (req, res) =>{
  dayNumber = req.params['dayNumber'];
  const solution = days[dayNumber-1].getSolution();
  console.log('SOLUTION: ' + solution);
  res.json(solution);
});

module.exports = router;
