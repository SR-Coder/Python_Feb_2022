/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {}

module.exports = { sumToOneDigit };

/*****************************************************************************/

function sumToOneDigit(n) {
  // Termination Condition if it's bad data (not a number)
  if (isNaN(parseInt(n))) {
    return null;
  }

  // base case: return solution
  if (n < 10) {
    return n;
  }

  const strNum = n.toString();
  let sum = 0;

  for (const strDigit of strNum) {
    sum += parseInt(strDigit);
  }

  return sumToOneDigit(sum);
}

// src = Morley Tatro
function sumToOneDigit2(num) {
  if (num < 10) {
    return num;
  }

  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sumToOneDigit2(sum);
}

// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams

  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).

  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {}

module.exports = { generateAnagrams };

/*****************************************************************************/

/**
 * Generates all anagrams (permutations) for the given string
 * @see https://www.geeksforgeeks.org/time-complexity-permutations-string/
 * - Time: O(n^2 * n!)
 * - Space: O(n!) factorial due to the call stack.
 */
function generateAnagrams(str, solutions = [], partial = "") {
  if (!str) {
    solutions.push(partial);
  }

  for (let i = 0; i < str.length; i++) {
    const leftSlice = str.slice(0, i);
    const rightSlice = str.slice(i + 1); // skips current letter
    generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
  }
  return solutions;
}