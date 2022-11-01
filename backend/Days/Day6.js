/**
 * This is a file template for the day problems.
 * Both for part 1 and part 2 of the problem.
 */

const fs = require('fs');
const os = require('os');

const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/6';

/**
  *
  * @param {Array.Array.<String>} boardingAnswers - The 'Yes' answers from each group
  * @return {String} The sum of 'Yes' asnwers from each group
  */
function solve(boardingAnswers) {
  let solution = 0;
  for (let i=0; i<boardingAnswers.length; i++) {
    const answerDictionary = {};
    for (let j=0; j<boardingAnswers[i].length; j++) {
      for (let k=0; k<boardingAnswers[i][j].length; k++) {
        const character = boardingAnswers[i][j][k];
        answerDictionary[character] = true;
      }
    }
    solution += Object.keys(answerDictionary).length;
  }
  return solution.toString();
}

/**
  *  This function solves the second part of the problem from Day 1
  *
  * @param {...}
  * @return {String}
  */
function solve2() {

}

/**
  *
  * @return {String} Returns solution for this days problem
  */
function getSolution() {
  const allGroups = fs.readFileSync('./backend/Resources/day6.txt', 'utf-8')
      .split(os.EOL+os.EOL).filter(Boolean);
  const boardingAnswers = [];
  for (let i=0; i<allGroups.length; i++) {
    const group = allGroups[i].split(os.EOL);
    boardingAnswers.push(group);
  }
  return solve(boardingAnswers);
}

/**
  *
  * @return {String} Returns solution for this days second part problem
  */
function getSolution2() {
  const lines = fs.readFileSync('./backend/Resources/dayX.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
}

module.exports = {
  description,
  link,
  getSolution,
  getSolution2};
