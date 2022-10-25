const fs = require('fs');
const os = require('os');

const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/1';

/**
 *
 * @param {Map<int, boolean>} numberList Map of numbers
 * @return {String} xy The *(product) of the two numbers
 *                 that sum to 2020, or that no solution was found
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

/*
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
*/

/*
function getSolution(){
  const readStream = fs.createReadStream('./backend/Resources/day1.txt',
      'utf-8');
  const mapp = new Map();
  console.log('1' + solution);
  readStream.on('data', (chunk) =>{
    const lines = chunk.split('\n'); //os.EOL
    for (let i = 0; i < lines.length; i++) {
      mapp.set(parseInt(lines[i], 10), true);
    }
  }).on('end', () =>{
    solution = solve(mapp);
    console.log('2' + solution);
  });
  console.log(mapp);
  console.log('3' + solution);
  solution = solve(mapp);
  return solution;
}
*/

/**
 *
 * @return {String} Returns solution for this days problem
 */
function getSolution() {
  const mapp = new Map();
  let solution = 'N/A';
  const lines = fs.readFileSync('./backend/Resources/day1.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    mapp.set(parseInt(lines[i], 10), true);
  }
  solution = solve(mapp);
  return solution;
}

module.exports = {
  description,
  link,
  getSolution};
