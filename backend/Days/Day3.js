const fs = require('fs');
const os = require('os');

const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/3';

/**
 *
 * @param {String[]} map - Array of string that make up the slope map
 * @return {int} solution - The numbers of trees encountered on the slope
 */
function solve(map) {
  let solution = 0;
  let columnPosition = 0;
  for (let i=0; i<map.length; i++) {
    if (map[i].charAt(columnPosition) == '#') {
      solution += 1;
    }
    columnPosition += 3;
    if (columnPosition >= map[i].length) {
      columnPosition -= map[i].length;
    }
  }
  return solution;
}

/**
 *
 * @return {String} Returns solution for this days problem
 */
function getSolution() {
  let solution = 'N/A';
  const lines = fs.readFileSync('./backend/Resources/day3.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  const map = lines;
  solution = solve(map);
  return solution;
}

module.exports = {
  description,
  link,
  getSolution};
