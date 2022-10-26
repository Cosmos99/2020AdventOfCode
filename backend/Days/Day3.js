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
 * @param {String[]} map - Array of string that make up the slope map
 * @param {int} right - How many columns we go to the right
 * @param {int} down - How many rows we traverse
 * @return {int} solution - The numbers of trees encountered on the slope
 */
function treesFound(map, right, down) {
  let solution = 0;
  let presentRow = 0;
  let presentColumn = 0;
  while (presentRow < map.length) {
    if (map[presentRow].charAt(presentColumn) == '#') {
      solution += 1;
    }
    presentRow += down;
    presentColumn += right;
    if (presentRow >= map.length) {
      return solution;
    }
    if (presentColumn >= map[presentRow].length) {
      presentColumn -= map[presentRow].length;
    }
  }
  return solution;
}

/**
 *
 * @param {String[]} map - Array of string that make up the slope map
 * @return {int} solution - The numbers of trees encountered on the slope
 */
function solve2(map) {
  let solution = treesFound(map, 1, 1);
  solution *= treesFound(map, 3, 1);
  solution *= treesFound(map, 5, 1);
  solution *= treesFound(map, 7, 1);
  solution *= treesFound(map, 1, 2);
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

/**
 *
 * @return {String} Returns solution for this days problem
 */
function getSolution2() {
  let solution = 'N/A';
  const lines = fs.readFileSync('./backend/Resources/day3.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  const map = lines;
  solution = solve2(map);
  return solution;
}

module.exports = {
  description,
  link,
  getSolution,
  getSolution2};
