const express = require('express');
const fs = require('fs');
const os = require('os');
const router = express.Router();

// Day Requires
const day1 = require('./Day1');
const day2 = require('./Day2');
const days = new Array;
days.push(day1);
days.push(day2);

router.get('/',(req, res) =>{
   res.status(404).render('NotFound');
});

router.get('/:dayNumber', (req, res) =>{
    dayNumber = req.params['dayNumber'];
    description = days[dayNumber-1].description;
    link = days[dayNumber-1].link;
    res.render('day', {dayNumber, description, link});
});

router.post('/:dayNumber', (req, res) =>{
    dayNumber = req.params['dayNumber'];
    const solution = days[dayNumber-1].getSolution();
    console.log('SOLUTION: ' + solution);
    res.json(solution);
});

module.exports = router;