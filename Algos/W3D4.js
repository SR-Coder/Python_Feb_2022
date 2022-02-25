/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {}

module.exports = { fewestCoinChange };

/*****************************************************************************/

/**
 * - Time: O(1) constant, no matter how large cents get, it's still 4 conditions.
 * - Space: O(1) constant, denominationTable has the same 4 keys (denominations)
 *    no matter how large cents gets.
 */
function fewestCoinChange(cents) {
  const denominationTable = {};

  if (cents >= 25) {
    const quartersCount = Math.floor(cents / 25);
    cents -= quartersCount * 25;
    denominationTable.quarter = quartersCount;
  }

  if (cents >= 10) {
    const dimesCount = Math.floor(cents / 10);
    cents -= dimesCount * 10;
    denominationTable.dime = dimesCount;
  }

  if (cents >= 5) {
    const nickelsCount = Math.floor(cents / 5);
    cents -= nickelsCount * 5;
    denominationTable.nickel = nickelsCount;
  }

  if (cents > 0) {
    denominationTable.penny = cents;
  }

  return denominationTable;
}

/**
 * - Time: O(1) constant, the loop always loops over the 4 denominations
 *    regardless of how large cents is.
 * - Space: O(1) constant.
 */
function fewestCoinChange2(cents) {
  const denominationsDescending = [
    { name: "quarter", amnt: 25 },
    { name: "dime", amnt: 10 },
    { name: "nickel", amnt: 5 },
    { name: "penny", amnt: 1 },
  ];

  const changeMap = {};

  for (const denomination of denominationsDescending) {
    if (cents >= denomination.amnt) {
      const count = Math.floor(cents / denomination.amnt);
      cents -= count * denomination.amnt;
      changeMap[denomination.name] = count;
    }
  }
  return changeMap;
}

/* 
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {}

module.exports = { missingValue };

/*****************************************************************************/

// below solutions coded to work when min is not always 0

/**
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 */
function missingValue(unorderedNums) {
  if (unorderedNums.length < 1) {
    return null;
  }

  let min = unorderedNums[0];
  let max = unorderedNums[0];
  let sum = 0;
  let expectedSum = 0;

  for (const n of unorderedNums) {
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
    sum += n;
  }

  for (let i = min; i <= max; i++) {
    expectedSum += i;
  }
  return sum === expectedSum ? null : expectedSum - sum;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function missingValueSeenTable(unorderedNums) {
  if (unorderedNums.length < 1) {
    return null;
  }

  const seen = {};
  let min = unorderedNums[0];
  let max = unorderedNums[0];

  for (let i = 0; i < unorderedNums.length; i++) {
    if (!seen[unorderedNums[i]]) {
      seen[unorderedNums[i]] = true;
    }
    if (unorderedNums[i] < min) {
      min = unorderedNums[i];
    }
    if (unorderedNums[i] > max) {
      max = unorderedNums[i];
    }
  }

  let val = min + 1;

  while (val < max) {
    if (!seen[val]) {
      return val;
    }
    val += 1;
  }
  return null;
}