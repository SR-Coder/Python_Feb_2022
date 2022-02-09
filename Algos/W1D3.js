/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  function encodeStr(str) {}
  
  module.exports = { encodeStr };
  
  /*****************************************************************************/
/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
 function encodeStr(str) {
    if (str.length === 0) {
      return "";
    }
  
    let encoded = "";
    let currChar = str[0];
    let currCharCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === currChar) {
        currCharCount++;
      }
      if (str[i] !== currChar || i === str.length - 1) {
        encoded += currChar + currCharCount;
        currChar = str[i];
        currCharCount = 1;
      }
    }
    return encoded.length < str.length ? encoded : str;
  }
  
  /**
   * - Time: O(n) linear, because nested while loop increments i as well so it is
   *    reducing the for loops iterations equally.
   * - Space: O(n) linear, because worst case every letter occurs one time so the
   *    output will be as long as input.
   */
  function strEncode(str) {
    let encoded = "";
  
    for (let i = 0; i < str.length; i++) {
      let currChar = str[i],
        dupeCount = 1;
  
      while (str[i + 1] === currChar) {
        ++dupeCount;
        i++;
      }
      encoded += currChar + dupeCount;
    }
    return encoded.length < str.length ? encoded : str;
  }
  
  /**
   * - Time: O(2n) linear -> O(n).
   * - Space: O(2n) -> O(n), because given str is stored twice, in hash table and
   *    output str.
   */
  function strEncodeHashTable(str) {
    const charFreq = {};
    let encoded = "";
  
    for (const char of str) {
      if (charFreq[char]) {
        charFreq[char]++;
      } else {
        charFreq[char] = 1;
      }
    }
  
    // iterate back over str to get the proper order
    // order of keys on obj is not guaranteed to be in order
    for (const char of str) {
      if (charFreq[char]) {
        encoded += char + charFreq[char];
        // we need to avoid the dupes
        charFreq[char] = 0;
      }
    }
    return encoded.length < str.length ? encoded : str;
  }

/********************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {}

module.exports = { decodeStr };

/*****************************************************************************/

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(n * m) linear. n = str.length, m = max char.repeat amount since
 *    repeating a char x times is x repetitions (iterations).
 *    The nested while loop can be ignored because it increments i as well,
 *    so every char is only visited once.
 * - Space: Worst case is max string size is reached because we don't know how
 *    large the given ints will be.
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
 function decodeStr(str) {
    let decoded = "";
    let i = 0;
  
    while (i < str.length) {
      // Retrieve letter at current index then increment to the num after.
      let char = str[i++];
      let numStr = "";
  
      /**
       * Look ahead to find potentially multiple digits after letter.
       * parseInt returns NaN if it fails to parse to a number.
       * We can't simply check for a truthy parsed int because 0 is falsy.
       * We can't use typeof because typeof NaN is "number". This is why we use
       * not Not a Number to check if we parsed a number.
       */
      while (i < str.length && !isNaN(parseInt(str[i]))) {
        // concatenate the string digit then increment.
        numStr += str[i++];
      }
  
      decoded += char.repeat(numStr);
    }
    return decoded;
  }
  
  function decodeStr2(str) {
    let decoded = "";
    let numStr = "";
    let letter = str[0];
  
    for (let i = 1; i < str.length; i++) {
      const num = parseInt(str[i]);
  
      // letter found, means we have passed digits.
      if (isNaN(num)) {
        // .repeat parses numStr to int for us.
        decoded += letter.repeat(numStr);
        // reset for next letter and it's following digits
        letter = str[i];
        numStr = "";
      } else {
        numStr += str[i];
      }
    }
    // Since we end with a number concat above doesn't happen for the last one.
    return decoded + letter.repeat(numStr);
  }
  © 2022 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  Docs
  Contact GitHub
  Pricing
  API
  Training
  Blog
  About
  