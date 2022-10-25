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

/**
 *
 * @param {Map<int, boolean>} numberList Map of numbers
 * @param {Number} sum - The sum to search for
 * @return {String} solution - The product (*) of the two numbers which
 *                  sum is equal to the sum parameter
 */
function find2Sum(numberList, sum) {
  const keys = numberList.keys();
  let x;
  let y = -1;
  let key = keys.next().value;
  while (key !== undefined) {
    x = key;
    if (numberList.has(sum - x)) {
      y = sum - x;
      break;
    }
    key = keys.next().value;
  }
  if (y === -1) {
    return -1;
  }
  if (x + y !== sum) {
    throw Error('The numbers don`t sum to 2020\n' +
                'PS: This shouldn`t be happening');
  }
  return x*y;
}

/**
 *  This function solves the second part of the problem from Day 1
 *
 * @param {Map<int, boolean>} numberList Map of numbers
 * @return {String} xy The *(product) of the two numbers
 *                 that sum to 2020, or that no solution was found
 */
function solve2(numberList) {
  const keys = numberList.keys();
  let x;
  let key = keys.next().value;
  let find2 = 0;
  while (key !== undefined) {
    x = key;
    find2 = find2Sum(numberList, 2020-x);
    if (find2 != -1) {
      return x*find2;
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
  solution = solve2(mapp);
  return solution;
}

module.exports = {
  description,
  link,
  getSolution};
