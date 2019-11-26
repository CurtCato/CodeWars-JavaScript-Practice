// 11/19/2019

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  let num = 0;
  let revArr = arr.reverse();
  if (revArr[0] === 1) num += 1;
  if (revArr[1] === 1) num += 2;
  if (revArr[2] === 1) num += 4;
  if (revArr[3] === 1) num += 8;
  if (revArr[4] === 1) num += 16;
  if (revArr[5] === 1) num += 32;
  if (revArr[6] === 1) num += 64;
  if (revArr[7] === 1) num += 128;
  if (revArr[8] === 1) num += 256;
  if (revArr[9] === 1) num += 512;
  if (revArr[10] === 1) num += 1024;
  return num;
};

console.log(binaryArrayToNumber([1, 0, 1, 0]));

//11/22/19

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  let strArr = str.split(" ");
  let shortestWord = strArr.reduce((shortWord, currentWord) => {
    return currentWord.length < shortWord.length ? currentWord : shortWord;
  }, strArr[0]);
  for (var i = 0; i <= strArr.length - 1; i++) {
    if (shortestWord > strArr[i].length) {
      shortestWord = strArr[i].length;
    }
  }
  return shortestWord;
}
console.log(findShort("holy guacamole, it's an avacado!"));

// 11/23/19

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits
// in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .sort()
      .reverse()
      .join("")
  );
}

console.log(descendingOrder(32498754987));

// 11/23/19

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }
  return s.toFixed(2);
}

console.log(SeriesSum(2));

// 11/23/19

// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which
// represent number of people get into bus (The first item) and number of people get off the bus (The second item)
// in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array).
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are
// probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return
// integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops) {
  let total = 0;

  for (i = 0; i < busStops.length; i++) {
    let currentStop = busStops[i];
    let getOn = currentStop[0];
    let getOff = currentStop[1];

    total += getOn;
    total -= getOff;
  }
  return total;
};

console.log(
  number([
    [3, 0],
    [9, 4],
    [6, 10]
  ])
);

// 11/23/19

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is
// odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases
// due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do
// not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(str) {
  let length = str.length;
  let middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return str[middle - 1] + str[middle];
  } else {
    return str[middle];
  }
}

console.log(getMiddle("word"));

// 11/23/19

// Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are
// grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

function sortMyString(str) {
  let letters = str.split("");
  let evens = [];
  let odds = [];

  for (i = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
      evens.push(letters[i]);
    } else {
      odds.push(letters[i]);
    }
  }
  return evens.join("") + " " + odds.join("");
}

console.log(sortMyString("CodeWars"));

// 11/23/19

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates
// a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

function solution(pairs) {
  let arr = [];
  for (key in pairs) {
    arr.push(key + " = " + pairs[key]);
  }
  return arr.join(", ");
}

console.log(solution({ a: 1, b: "2" }));

// 11/23/19

// Write a method that will search an array of strings for all strings that contain another string, ignoring
// capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single
// string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method
// should return ["home", "Mercury"].

function wordSearch(query, seq) {
  const wordsFound = seq.filter(str =>
    str.toUpperCase().includes(query.toUpperCase())
  );

  return wordsFound.length ? wordsFound : ["Empty"];
}

console.log(wordSearch("lo", ["Mercury", "lunch", "home"]));



// You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings
//  is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a
// value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.

function highest_value(str1, str2){
  let str1Arr = []
  let str2Arr = []
  str1.split('').forEach(char => {
    str1Arr.push(char.charCodeAt(char))
  })
  let str1Val = str1Arr.reduce((a, b) => a + b, 0)

  str2.split('').forEach(char => {
    str2Arr.push(char.charCodeAt(char))
  })
  let str2Val = str2Arr.reduce((a, b) => a + b, 0)

  if(str1Val > str2Val){
    return str1Val
  } else if(str1Val = str2Val) {
    return str1
  } else return str2Val
}


console.log(highest_value("stuff", "WHAT"))



//  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that
//  determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.
//  Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


let isIsogram = (str) => str.toLowerCase().split("").every((c, i) => str.toLowerCase().indexOf(c) == i);

console.log(isIsogram("mOse"))



// 11/26/19

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd
// number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function strSplit(str){
   let strArr = str.toString().split('')
   let collector = []
   let result = []
   for( i = 0; i < strArr.length; i = i+2) {
     let pairArr = []
      pairArr.push(strArr[i], strArr[i+1])
      collector.push(pairArr)
   }
   for(i = 0; i < collector.length; i ++){
    result.push(collector[i].join(''))
   }
   if(result[result.length -1].length % 2 !== 0){
    result[result.length - 1] += '_'
   }
   return result
}

console.log(strSplit("hungry"))