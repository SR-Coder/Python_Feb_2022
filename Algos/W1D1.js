/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.

 */
function caseInsensitiveStringCompare(strA, strB) {}

module.exports = { caseInsensitiveStringCompare };

/*****************************************************************************/

/**
 * "Naive" because no early termination when early letters are different.
 * - Time: O(n) linear.
 *    - Best: O(n + m) linear, n = strA.length, m = strB.length.
 *        After both .toUpperCase happen, then comparison fails right away
 *        on first char being different or on different lengths.
 *    - Worst: O(3n) linear.
 *        When lengths are same, we can call length of both strings "n".
 *        Two .toUpperCase loops over "n" length to get 2n, then the worst
 *        case of looping to the whole string to find they are equal or
 *        last char is different which results in the 3rd "n".
 * - Space: O(n + m) -> O(n).
 *    .toUpperCase has to create a new copy of each string since strings
 *    are immutable.
 */
function caseInsensitiveStringCompareNaive(strA, strB) {
  return strA.toUpperCase() === strB.toUpperCase();
}

/**
 * Best case is early termination on first different char.
 * - Time: O(n) linear, due to worst case looping to end.
 * - Space: O(1) constant, only upperCasing two letters at a time.
 */
function caseInsensitiveStringCompare(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  for (let i = 0; i < strA.length; i++)
    if (strA[i].toUpperCase() !== strB[i].toUpperCase()) {
      return false;
    }
  return true;
}

/**
 * Loop from both sides inwards to solve the problem of not knowing if looping
 * forwards or backwards would cause an earlier exit.
 * - Time: O(n/2) b/c loop is half length. This is still linear because if
 *    n doubles in size, the iterations double, so simplified to O(n).
 * - Space: O(1) constant.
 */
function caseInsensitiveStringCompare2(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  // check both sides for early exit
  for (let i = 0; i <= strA.length / 2; i++) {
    if (
      strA[i].toUpperCase() !== strB[i].toUpperCase() ||
      strA[strA.length - 1 - i].toUpperCase() !==
        strB[strB.length - 1 - i].toUpperCase()
    ) {
      return false;
    }
  }
  return true;
}


/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 */
function acronymize(str) {}

module.exports = { acronymize };

/*****************************************************************************/

/**
 * - Time: O(n + m) linear -> O(n) where n is wordsStr.length and
 *    m is wordsArr.length.
 * - Space: O(n) linear.
 */
function acronymizeWithSplit(wordsStr) {
  let acronym = "";
  const wordsArr = wordsStr.split(" ");

  for (const word of wordsArr) {
    acronym += word[0].toUpperCase();
  }
  return acronym;
}

/**
 * - Time: O(n) linear because the nested loops increment i, so every iteration
 *    of nested loops reduces iterations of outer loop.
 * - Space: O(n) linear.
 */
function acronymize(wordsStr) {
  let acronym = "";
  const len = wordsStr.length;

  for (let i = 0; i < len; i++) {
    while (wordsStr[i] === " " && i < len) {
      i++; // skip spaces, handles multiple spaces
    }
    // upperCase it now while we are already looping
    // to avoid upperCase having to loop over our output to upperCase
    acronym += wordsStr[i].toUpperCase();

    while (wordsStr[i] !== " " && i < len) {
      i++; // skip rest of word
    }
  }
  return acronym;
}


/* 
  String: Reverse

  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {}

module.exports = { reverseString };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function reverseString2(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}