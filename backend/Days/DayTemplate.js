/* eslint-disable */

/**
 * This is a file template for the day problems.
 * Both for part 1 and part 2 of the problem.
 */

const fs = require('fs');
const os = require('os');

const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/';

/**
  *
  * @param {...}
  * @return {String}
  */
function solve() {

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
  const lines = fs.readFileSync('./backend/Resources/dayX.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
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
