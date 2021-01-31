const express = require('express');
const fs = require('fs');
const os = require('os');
const router = express.Router();

const number = 1;
const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/1';

/**
 *
 * @param {Map<int, boolean>} numberList Map of numbers
 * @return {int} xy The * of the two numbers that sum to 2020
 */
function solve(numberList) {
  const keys = numberList.keys();
  let x;
  let y = -1;
  let key = keys.next().value;
  while (key !== undefined) {
    x = key;
    if (numberList.has(2020 - x)) {
      y = 2020 - x;
      break;
    }
    key = keys.next().value;
  }
  if (y === -1) {
    return 'No solution found!';
  }
  if (x + y !== 2020) {
    throw Error('The numbers don`t sum to 2020\n' +
                'PS: This shouldn`t be happening');
  }
  return x*y;
}

router.get('/', (req, res) =>{
  res.render('day', {number, description, link});
});


router.post('/', (req, res) =>{
  const readStream = fs.createReadStream('./backend/Resources/day1.txt',
      'utf-8');
  const mapp = new Map();
  readStream.on('data', (chunk) =>{
    const lines = chunk.split(os.EOL);
    for (let i = 0; i < lines.length; i++) {
      mapp.set(parseInt(lines[i], 10), true);
    }
  }).on('end', () =>{
    const solution = solve(mapp);
    res.status(200).json(solution);
  });
});

module.exports = router;
