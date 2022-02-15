/* 
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {}

module.exports = { stringDedupe };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 */
function stringDedupe(str) {
  let distinctStr = "";
  const seen = {};

  // loop backwards to include last occurrence
  for (let i = str.length - 1; i >= 0; --i) {
    if (!seen[str[i]]) {
      distinctStr = str[i] + distinctStr;
      seen[str[i]] = true;
    }
  }
  return distinctStr;
}

/**
 * Keeps first occurrence, no hash table approach.
 * - Time: O(n^2) quadratic due to .include being nested loop.
 * - Space: O(n) linear.
 */
function strDedupe(str) {
  let distinctStr = "";

  for (const char of str) {
    if (distinctStr.includes(char) === false) {
      distinctStr += char;
    }
  }
  return distinctStr;
}

/* 
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {}

module.exports = { reverseWords };

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear, despite there being a nested loop,
 *    both loops amount to looping over every char in wordsStr, which is 'n'
 *    .split is 1n, and the two for loops are 1n, so 1n + 1n = 2n.
 * - Space: O(2n) -> O(n) linear, the input is stored twice, in words array and
 *    in wordsReversed.
 */
function reverseWordsSplit(wordsStr) {
  const words = wordsStr.split(" ");
  let wordsReversed = "";

  for (const word of words) {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; --i) {
      reversedWord += word[i];
    }

    // add a space in front of word if it's not the first word
    if (wordsReversed.length > 0) {
      reversedWord = " " + reversedWord;
    }
    wordsReversed += reversedWord;
  }
  return wordsReversed;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function reverseWords(wordsStr) {
  let reversedWord = "";
  let wordsReversed = "";

  for (const char of wordsStr) {
    if (char !== " ") {
      // prepend to reverse it
      reversedWord = char + reversedWord;
    }
    // space found
    else {
      // add space in front of word if not first word added
      if (wordsReversed.length > 0) {
        reversedWord = " " + reversedWord;
      }

      wordsReversed += reversedWord;
      reversedWord = ""; // reset
    }
  }

  // last word wasn't added if there are no trailing spaces at the end to cause it to be added
  if (reversedWord.length > 0) {
    // to avoid adding a space when it's the only word
    if (wordsReversed.length !== 0) {
      reversedWord = " " + reversedWord;
    }
    wordsReversed += reversedWord;
  }

  return wordsReversed;
}

/* 
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {}

module.exports = { reverseWordOrder };

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear. The 2n comes from the fact that words.length
 *    is at most the same length as wordsStr when there are no spaces.
 *    If there are spaces then words.length will be less than wordsStr
 *    because of the spaces being removed from the .split.
 * - Space: O(2n) -> O(n) linear. Storing wordsStr twice, once in words
 *    array and again in reversedWordOrder.
 */
function reverseWordOrderSplit(wordsStr) {
  // if all spaces
  if (wordsStr == false) {
    return wordsStr;
  }

  const words = wordsStr.split(" ");
  let reversedWordOrder = "";

  // loop backwards
  for (let i = words.length - 1; i >= 0; --i) {
    reversedWordOrder += words[i];

    // don't add an extra space at the end
    if (i !== 0) {
      reversedWordOrder += " ";
    }
  }
  return reversedWordOrder;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear. wordsStr is stored again in reversedWOrdOrder var.
 */
function reverseWordOrder(wordsStr) {
  // if all spaces
  if (wordsStr == false) {
    return wordsStr;
  }

  let currWord = "";
  let reversedWordOrder = "";

  for (let i = wordsStr.length - 1; i >= 0; --i) {
    if (wordsStr[i] !== " ") {
      // prepend so the Word itself is not reversed by looping backWords
      currWord = wordsStr[i] + currWord;
    }
    // space found
    else {
      // add a space in front of the word, except on first word
      if (reversedWordOrder.length > 0) {
        currWord = " " + currWord;
      }

      reversedWordOrder += currWord;
      currWord = "";
    }
  }

  // no space at end of string means we didn't add the last word
  if (currWord.length > 0) {
    reversedWordOrder += " " + currWord;
  }
  return reversedWordOrder;
}