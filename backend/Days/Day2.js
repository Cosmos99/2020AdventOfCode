const fs = require('fs');
const os = require('os');


const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/2';

/** Class representing a password line. */
class PasswordLine {
  /**
   * Create a password line.
   * @param {number} min - The min value letter must be present.
   * @param {number} max - The max value letter must be present.
   * @param {char} letter - The letter that has to be in the password.
   * @param {String} password - The password itself.
   */
  constructor(min, max, letter, password) {
    this.min=min;
    this.max=max;
    this.letter=letter;
    this.password=password;
  }

  /**
   * Function to check if password is valid
   * @return {Boolean} Returns true if password is valid.
   */
  isValid() {
    let letterAppearance = 0;
    for (let i = 0; i<this.password.length; i++) {
      if (this.password.charAt(i) == this.letter) {
        letterAppearance +=1;
      }
    }
    if (letterAppearance<this.min || letterAppearance> this.max) {
      return false;
    }
    return true;
  }

  /**
   * Function to check if password is valid
   * @return {Boolean} Returns true if password is valid.
   */
  isValid2() {
    let letterAppearance = 0;
    if (this.min - 1 < this.password.length) {
      if (this.password.charAt(this.min-1) == this.letter) {
        letterAppearance += 1;
      }
    }
    if (this.max - 1 < this.password.length) {
      if (this.password.charAt(this.max-1) == this.letter) {
        letterAppearance += 1;
      }
    }
    if (letterAppearance == 1) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * @param {Array} passwordLineList - Map of numbers
 * @return {int} solution - The number of valid passwords
 */
 function solve(passwordLineList) {
  let solution = 0;
  for (let i = 0; i<passwordLineList.length; i++) {
    if (passwordLineList[i].isValid()) {
      solution +=1;
    }
  }
  return solution;
}


/**
 * @param {Array} passwordLineList - Map of numbers
 * @return {int} solution - The number of valid passwords
 */
function solve2(passwordLineList) {
  let solution = 0;
  for (let i = 0; i<passwordLineList.length; i++) {
    if (passwordLineList[i].isValid2()) {
      solution +=1;
    }
  }
  return solution;
}


/**
*
* @return {String} Returns solution for this days problem
*/
function getSolution() {
  const passwordLineList = [];
  let solution = 'N/A';
  const lines = fs.readFileSync('./backend/Resources/day2.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split(' ');
    const numbers = parts[0].split('-');
    const min = numbers[0];
    const max = numbers[1];
    const letter = parts[1][0];
    const password = parts[2];
    passwordLineList.push(new PasswordLine(min, max, letter, password));
  }
  solution = solve(passwordLineList);
  return solution;
}

/**
 *
 * @return {String} Returns solution for this days second part problem
 */
 function getSolution2() {
  const passwordLineList = [];
  let solution = 'N/A';
  const lines = fs.readFileSync('./backend/Resources/day2.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split(' ');
    const numbers = parts[0].split('-');
    const min = numbers[0];
    const max = numbers[1];
    const letter = parts[1][0];
    const password = parts[2];
    passwordLineList.push(new PasswordLine(min, max, letter, password));
  }
  solution = solve2(passwordLineList);
  return solution;
}

module.exports = {
  description,
  link,
  getSolution,
  getSolution2};
