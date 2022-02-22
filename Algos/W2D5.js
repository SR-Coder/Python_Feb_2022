/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
  ];
  const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  
  const newInv2 = [];
  const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
  const expected2 = [{ name: "Peanut Butter", quantity: 20 }];
  
  const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
  const currInv3 = [];
  const expected3 = [{ name: "Peanut Butter", quantity: 20 }];
  
  /**
   * Updates the current inventory based on the new inventory.
   * - Time: O(?).
   * - Space: O(?).
   * @typedef {Object} Inventory
   * @property {string} Inventory.name The name of the item.
   * @property {number} Inventory.quantity The quantity of the item.
   * @param {Array<Inventory>} newInv A shipment of new inventory.
   *    An array of inventory objects.
   * @param {Array<Inventory>} currInv
   * @return The currInv after being updated.
   */
  function updateInventory(newInv, currInv) {}
  
  module.exports = { updateInventory };
  
  /*****************************************************************************/
  
  /**
   * - Time: O(n * m), where n = newInv.length and m = currInv.length.
   * - Space: O(1) constant.
   */
  function updateInventory(newInv, currInv) {
    for (let i = 0; i < newInv.length; i++) {
      let itemFound = false;
      const newItem = newInv[i];
  
      for (let j = 0; j < currInv.length; ++j) {
        const currItem = currInv[j];
  
        if (newItem.name === currItem.name) {
          itemFound = true;
          currItem.quantity += newItem.quantity;
          // no need to keep looping over the rest of the items since we found what we are looking for
          break;
        }
      }
      // after looking through all current inventory
      if (itemFound === false) {
        currInv.push(newItem);
      }
    }
    return currInv;
  }
  
  /**
   * - Time: O(n + m) -> O(n) linear, n = currentInv.length, m = newInv.length.
   * - Space: O(n) linear, from currInvTable extra storage.
   */
  function updateInventory2(newInv, currentInv) {
    const currInvTable = {};
  
    for (let i = 0; i < currentInv.length; i++) {
      // save a reference to this currentInv item into our hash table object
      // so we can look it up with O(1) constant time
      currInvTable[currentInv[i].name] = currentInv[i];
    }
  
    for (let i = 0; i < newInv.length; i++) {
      const item = newInv[i];
  
      if (currInvTable.hasOwnProperty(item.name)) {
        // retrieve the currentInv obj reference
        let currentInvItem = currInvTable[item.name];
  
        // update the obj by reference
        currentInvItem.quantity += item.quantity;
      } else {
        currentInv.push(item);
      }
    }
    return currentInv;
  }

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {}

module.exports = { trim };

/*****************************************************************************/

/**
 * - Time: O(n) linear, both while loops plus the .slice loop all add up to
 *    str.length.
 * - Space: O(n) linear, .slice creates a new string, at most it will be as
 *    long as input str.
 */
function trim(str) {
  let startIdx = 0;
  let endIdx = str.length - 1;

  // loose comparison to false works for spaces
  // and other space-like characters (tabs, etc.)
  while (str[startIdx] == false) {
    startIdx++;
  }

  while (str[endIdx] == false) {
    endIdx--;
  }

  return str.slice(startIdx, endIdx + 1);
}

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {}

module.exports = { isAnagram };

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 */
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  // create a frequency table of characters in s1 and s2
  const s1CharFreq = {};
  const s2CharFreq = {};

  // build both tables in same loop since the strings are same length
  for (let i = 0; i < s1.length; i++) {
    const s1CharUpper = s1[i].toUpperCase();
    const s2CharUpper = s2[i].toUpperCase();

    if (s1CharFreq.hasOwnProperty(s1CharUpper) === false) {
      s1CharFreq[s1CharUpper] = 1;
    } else {
      s1CharFreq[s1CharUpper]++;
    }

    if (s2CharFreq.hasOwnProperty(s2CharUpper) === false) {
      s2CharFreq[s2CharUpper] = 1;
    } else {
      s2CharFreq[s2CharUpper]++;
    }
  }

  // compare both frequency tables to make sure all same characters and all same frequency
  for (const char in s1CharFreq) {
    if (!s2CharFreq.hasOwnProperty(char)) {
      return false;
    }

    // comparing frequency of this character
    if (s1CharFreq[char] !== s2CharFreq[char]) {
      return false;
    }
  }
  return true;
}

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 */
function isAnagram2(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    let s1CharCount = 0;
    let s2CharCount = 0;
    let currChar = s1[i].toUpperCase();

    // count how many times currChar appears in both strings
    for (let j = 0; j < s1.length; ++j) {
      if (s1[j].toUpperCase() === currChar) {
        s1CharCount++;
      }

      if (s2[j].toUpperCase() === currChar) {
        s2CharCount++;
      }
    }

    if (s1CharCount !== s2CharCount) {
      return false;
    }
  }
  return true;
}