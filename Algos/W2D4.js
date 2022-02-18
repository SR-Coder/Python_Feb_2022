/* 
  String: Rotate String

  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {}

module.exports = { rotateStr: rotateStr2 };

/*****************************************************************************/

/**
 * - Time: O(n) linear. Every character is visited once.
 * - Space: O(n) linear. Every character is stored again in the new str.
 */
function rotateStr(str, amnt) {
  const rotateAmnt = amnt % str.length;
  return (
    str.slice(str.length - rotateAmnt) + str.slice(0, str.length - rotateAmnt)
  );
}

/**
 * - Time: O(n) linear. Every character is visited once.
 * - Space: O(n) linear. Every character is stored again in the new str.
 */
function rotateStr2(str, amnt) {
  /* 
  We need to use the modulo operator only when the amnt > str.length, to get
  the remainder, but when amnt < str.length, rotateAmnt will be the same as
  amnt so we don't have to worry about that.

  The reason we only care about the remainder when amnt > str.length is because
  if amnt === str.length, the string is rotated one full cycle back to it's
  original position. So we can ignore all full cycles and just focus on the
  remainder that needs to be rotated.
  */
  const rotateAmnt = amnt % str.length;
  let charsToRotate = "";
  let newStr = "";

  for (let i = str.length - rotateAmnt; i < str.length; i++) {
    charsToRotate += str[i];
  }

  for (let i = 0; i < str.length - rotateAmnt; i++) {
    newStr += str[i];
  }
  return charsToRotate + newStr;
}

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {}

module.exports = { isRotation };

/*****************************************************************************/

/**
 * Solution approach:
 *    All rotated versions of s2 are included in s1 + s1.
 *    s1: "ABCD".
 *    s1 + s1: "ABCDABCD".
 *
 *    s2 Rotation variations:
 *    s2: "CDAB".
 *    s2: "DABC".
 *    s2: "BCDA".
 * - Time: O(4n) -> O(n) linear. Concatenating s1 + s1 requires the characters
 *    of s1 to be copied into a new string twice (2n). The .includes is then
 *    looping over the string that is twice the length of s1 (2n) again. Add
 *    up both 2n to get 4n.
 * - Space: O(2n) -> O(n) linear, where n is s1.length, 2n from s1 + s1.
 */
function isRotation(s1, s2) {
  if (s1.length !== s2.length || s1 === s2) {
    return false;
  }
  return (s1 + s1).includes(s2);
}