/**
 * This is a file template for the day problems.
 * Both for part 1 and part 2 of the problem.
 */

const fs = require('fs');
const os = require('os');

const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/5';

/**
  *
  * @param {String[]} boardingPasses - The list containing all boarding codes
  * @return {String} solution - The highest ID boarding pass
  */
function solve(boardingPasses) {
  let solution = -1;
  for (let i=0; i<boardingPasses.length; i++) {
    const rowCharacters = boardingPasses[i].substring(0, 7);
    const columnCharacters = boardingPasses[i].substring(7);
    let leftRow = 0;
    let rightRow = 127;
    for (let k=0; k<7; k++) {
      const character = rowCharacters[k];
      if (character == 'B') {
        leftRow = parseInt((leftRow+rightRow)/2);
      } else {
        rightRow = parseInt((leftRow+rightRow)/2);
      }
    }
    let leftColumn = 0;
    let rightColumn = 7;
    for (let k=0; k<3; k++) {
      const character = columnCharacters[k];
      if (character == 'R') {
        leftColumn = parseInt((leftColumn+rightColumn)/2);
      } else {
        rightColumn = parseInt((leftColumn+rightColumn)/2);
      }
    }
    const id = rightRow*8+rightColumn;
    if (id>solution) {
      solution=id;
    }
  }
  return solution.toString();
}

/**
  *  This function solves the second part of the problem from Day 1
  *
  * @param {String[]} boardingPasses - The list containing all boarding codes
  * @return {String}
  */
function solve2(boardingPasses) {
  const ids = [];
  for (let i=0; i<boardingPasses.length; i++) {
    const rowCharacters = boardingPasses[i].substring(0, 7);
    const columnCharacters = boardingPasses[i].substring(7);
    let leftRow = 0;
    let rightRow = 127;
    for (let k=0; k<7; k++) {
      const character = rowCharacters[k];
      if (character == 'B') {
        leftRow = parseInt((leftRow+rightRow)/2);
      } else {
        rightRow = parseInt((leftRow+rightRow)/2);
      }
    }
    let leftColumn = 0;
    let rightColumn = 7;
    for (let k=0; k<3; k++) {
      const character = columnCharacters[k];
      if (character == 'R') {
        leftColumn = parseInt((leftColumn+rightColumn)/2);
      } else {
        rightColumn = parseInt((leftColumn+rightColumn)/2);
      }
    }
    const id = rightRow*8+rightColumn;
    ids.push(id);
  }
  ids.sort();
  console.log(ids);
  for (let i=0; i<ids.length-1; i++) {
    if (ids[i+1] - ids[i] == 2) {
      return (ids[i]+1).toString();
    }
  }
  return 'NOTHING FOUND!';
}

/**
  *
  * @return {String} Returns solution for this days problem
  */
function getSolution() {
  const lines = fs.readFileSync('./backend/Resources/day5.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  return solve(lines);
}

/**
  *
  * @return {String} Returns solution for this days second part problem
  */
function getSolution2() {
  const lines = fs.readFileSync('./backend/Resources/day5.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  return solve2(lines);
}

module.exports = {
  description,
  link,
  getSolution,
  getSolution2};
