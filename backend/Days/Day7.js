/**
 * This is a file template for the day problems.
 * Both for part 1 and part 2 of the problem.
 */

const fs = require('fs');
const os = require('os');

const description = 'Lorem ipsum solor sit damet!';
const link = 'https://adventofcode.com/2020/day/7';

/**
 * This class represents a Bag which contains other colored bags
 */
class ColoredBag {
  /**
   *
   * @param {String} name - The name of the ColoredBag
   */
  constructor(name) {
    this.name = name;
    this.preceded = [];
    this.contains = [];
    this.containsNumber = [];
  }
  /**
   *
   * @param {ColoredBag} bag - Adds this bag to the preceded array
   */
  addPrecedent(bag) {
    this.preceded.push(bag);
  }

  /**
   *
   * @param {ColoredBag} bag - Adds this bag to the contains array
   */
  addContaining(bag) {
    this.contains.push(bag);
  }

  /**
   *
   * @param {ColoredBag} bag - Adds this bag to the contains array
   * @param {int} number - Of the added bag, contain 'number' of bags
   */
  addContaining(bag, number) {
    this.contains.push(bag);
    this.containsNumber.push(number);
  }

  /**
   *
   * @param {ColoredBag} bag - ColoredBag to check with current one
   * @return {Boolean} Returns true if both ColoredBags have the same name
   */
  equals(bag) {
    return this.name === bag.name;
  }

  /**
   *
   * @return {Integer} How Many bags does this bag contain
   */
  howManyContaining() {
    let containing = 0;
    for (let i=0; i<this.contains.length; i++) {
      if(this.name === 'dark yellow'){
      console.log('How many of this: ' +this.containsNumber[i]);
      console.log('How many does that contain:'+this.contains[i].howManyContaining());
    }
      containing = +containing + +this.containsNumber[i] +
        (+this.containsNumber[i] * +this.contains[i].howManyContaining());
    }
    return containing;
    /*
    if(containig == 0){
      return 1;
    } else {
      return containing;
    }
    */
  }
}
/**
 *
 * @param {Array.ColoredBag} bagList - Colored Bags list
 * @param {ColoredBag} bag - Colored bag to check if it exists in bagList
 * @return {int} Returns the index of the bag where it is in the list,
 *                if not found, returns -1
 */
function containsBag(bagList, bag) {
  for (let k=0; k<bagList.length; k++) {
    if (bagList[k].equals(bag)) {
      return k;
    }
  }
  return -1;
}


/**
  *
  * @param {Array.String} rules - List that contains all of the rules
  * @return {Array.ColoredBag}
  */
function constructBags(rules) {
  const coloredBags = [];
  for (let i=0; i<rules.length; i++) {
    const words = rules[i].split(' ');
    let bag = new ColoredBag(words[0] + ' ' + words[1]);
    let index = containsBag(coloredBags, bag);
    if (index >= 0) {
      bag = coloredBags[index];
    } else {
      coloredBags.push(bag);
    }

    for (let k=4; k<words.length; k+=4) {
      // let numberOfBags = words[k];
      let containingBag = new ColoredBag(words[k+1] + ' ' + words[k+2]);
      index = containsBag(coloredBags, containingBag);
      if (index >=0 ) {
        containingBag = coloredBags[index];
      } else {
        coloredBags.push(containingBag);
      }
      bag.addContaining(containingBag);
      containingBag.addPrecedent(bag);
    }
  }
  return coloredBags;
}

/**
  *
  * @param {Array.String} rules - List that contains all of the rules
  * @return {Array.ColoredBag}
  */
function constructBags2(rules) {
  const coloredBags = [];
  for (let i=0; i<rules.length; i++) {
    const words = rules[i].split(' ');
    let bag = new ColoredBag(words[0] + ' ' + words[1]);
    let index = containsBag(coloredBags, bag);
    if (index >= 0) {
      bag = coloredBags[index];
    } else {
      coloredBags.push(bag);
    }
    if (words[4] === 'no') {
      continue;
    }
    for (let k=4; k<words.length; k+=4) {
      const numberOfBags = words[k];
      let containingBag = new ColoredBag(words[k+1] + ' ' + words[k+2]);
      index = containsBag(coloredBags, containingBag);
      if (index >=0 ) {
        containingBag = coloredBags[index];
      } else {
        coloredBags.push(containingBag);
      }
      bag.addContaining(containingBag, numberOfBags);
      containingBag.addPrecedent(bag);
    }
  }
  return coloredBags;
}

/**
   *
   * @param {Array.ColoredBag} coloredBagsList -
   *  Contains the list of all colored bags
   * @return {String}
   * Returns how many type of bags can fit into a Shiny gold bag
   */
function solve(coloredBagsList) {
  const index = containsBag(coloredBagsList, new ColoredBag('shiny gold'));
  if ( index == -1) {
    return 'nah fam';
  }
  const alreadyCheckedBags = [];
  const toCheckBags = [];
  toCheckBags.push(coloredBagsList[index]);
  while (toCheckBags.length != 0) {
    const curentBag = toCheckBags.pop();
    for (let i=0; i<curentBag.preceded.length; i++) {
      const precededBag = curentBag.preceded[i];
      if (containsBag(alreadyCheckedBags, precededBag) == -1 &&
      containsBag(toCheckBags, precededBag) == -1) {
        toCheckBags.push(precededBag);
      }
    }
    alreadyCheckedBags.push(curentBag);
  }
  return (alreadyCheckedBags.length - 1).toString();
}

/**
   *  This function solves the second part of the problem from Day 1
   *
   * @param {Array.ColoredBag} coloredBagsList -
   * Contains the list of all colored bags
   * @return {String} Returns how bags fit into a Shiny gold bag
   */
function solve2(coloredBagsList) {
  const index = containsBag(coloredBagsList, new ColoredBag('shiny gold'));
  if ( index == -1) {
    return 'nah fam';
  }
  return coloredBagsList[index].howManyContaining().toString();
}

/**
   *
   * @return {String} Returns solution for this days problem
   */
function getSolution() {
  const rules = fs.readFileSync('./backend/Resources/day7.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  const bags = constructBags(rules);
  return solve(bags);
}

/**
   *
   * @return {String} Returns solution for this days second part problem
   */
function getSolution2() {
  const rules = fs.readFileSync('./backend/Resources/day7.txt', 'utf-8')
      .split(os.EOL).filter(Boolean);
  const bags = constructBags2(rules);
  return solve2(bags);
}

module.exports = {
  description,
  link,
  getSolution,
  getSolution2};
