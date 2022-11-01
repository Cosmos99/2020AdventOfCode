/* eslint-disable */

//TODO: Make part 2 of this problem

/**
 * This is a file template for the day problems.
 * Both for part 1 and part 2 of the problem.
 */

const fs = require('fs');
const os = require('os');

const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/4';


/**
  *
  * @param {Map<String,String>} passport - The passport map
  * @return {Boolean} Return true if passport is valid
  */
function isValid(passport) {
  if (passport.byr === '') {
    return false;
  }
  if (passport.iyr === '') {
    return false;
  }
  if (passport.eyr === '') {
    return false;
  }
  if (passport.hgt === '') {
    return false;
  }
  if (passport.hcl === '') {
    return false;
  }
  if (passport.ecl === '') {
    return false;
  }
  if (passport.pid === '') {
    return false;
  }
  return true;
}
/**
  *
  * @param {Map<String,String>} passport - The passport map
  * @return {Boolean} Return true if passport is valid
  */
function isValid2(passport) {
  if (passport.byr === '') {
    return false;
  } else {
    if (passport.byr<1920 || passport.byr>2002) {
      return false;
    }
  }
  if (passport.iyr === '') {
    return false;
  } else {
    if (passport.iyr<2010 || passport.iyr>2020) {
      return false;
    }
  }
  if (passport.eyr === '') {
    return false;
  } else {
    if (passport.eyr<2020 || passport.eyr>2030) {
      return false;
    }
  }
  if (passport.hgt === '') {
    return false;
  } else {
    const height = passport.hgt.match('[0-9]')[1];
    if (passport.hgt[passport.hgt-1] == 'm') {

    }
  }
  if (passport.hcl === '') {
    return false;
  }
  if (passport.ecl === '') {
    return false;
  }
  if (passport.pid === '') {
    return false;
  }
  return true;
}
/**
  *
  * @param {Map<String,String>[]} passportList - The list containing all passports
  * @return {String} solution - The number of valid passports as String
  */
function solve(passportList) {
  let solution = 0;
  for (let i=0; i<passportList.length; i++) {
    if (isValid(passportList[i])) {
      solution += 1;
    }
  }

  return solution;
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
  const passports = [];
  const passportLines = fs.readFileSync('./backend/Resources/day4.txt', 'utf-8')
      .split(os.EOL+os.EOL).filter(Boolean);
  for (let i=0; i<passportLines.length; i++) {
    const passp = new Map;
    passp.byr = ''; // (Birth Year)
    passp.iyr = ''; // (Issue Year)
    passp.eyr = ''; // (Expiration Year)
    passp.hgt = ''; // (Height)
    passp.hcl = ''; // (Hair Color)
    passp.ecl = ''; // (Eye Color)
    passp.pid = ''; // (Passport ID)
    passp.cid = ''; // (Country ID)
    const lines = passportLines[i].split(os.EOL);
    for (let j=0; j<lines.length; j++) {
      const sections = lines[j].split(' ');
      for (let k=0; k<sections.length; k++) {
        const passportPart = sections[k].split(':');
        passp[passportPart[0]] = passportPart[1];
      }
    }
    passports.push(passp);
  }
  return solve(passports);
}

/**
  *
  * @return {String} Returns solution for this days second part problem
  */
function getSolution2() {
  const lines = fs.readFileSync('./backend/Resources/day4.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
}

module.exports = {
  description,
  link,
  getSolution,
  getSolution2};
