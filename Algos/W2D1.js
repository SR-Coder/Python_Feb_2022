/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {}

module.exports = { frequencyTableBuilder };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function frequencyTableBuilder(arr) {
  const freqTable = {};

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (freqTable.hasOwnProperty(str) === false) {
      // first occurrence found
      freqTable[str] = 1;
    } else {
      freqTable[str]++;
    }
  }
  return freqTable;
}

function frequencyTableBuilder2(arr) {
  const freqTable = {};

  for (const str of arr) {
    if (freqTable.hasOwnProperty(str) === false) {
      // first occurrence found
      freqTable[str] = 1;
    } else {
      freqTable[str]++;
    }
  }

  return freqTable;
}


// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {}

/*****************************************************************************/

/**
 * Finds the only number that occurs odd times in the given odd-lengthed array.
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs odd times.
 */
function oddOccurrencesInArray(nums) {
  const freqTable = {};

  for (const n of nums) {
    if (freqTable.hasOwnProperty(n)) {
      freqTable[n]++;
    } else {
      freqTable[n] = 1;
    }
  }

  for (const key in freqTable) {
    if (freqTable[key] % 2 !== 0) {
      return +key; // + converts the string key back to int.
    }
  }

  // The spec guaranteed there will be a solution so no other return is needed.
}

/**
 * Finds the only number that occurs odd times in the given odd-lengthed array.
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs odd times.
 */
function oddOccurrencesInArray2(nums) {
  // Map lets us store ints as keys so we don't have to convert back to int.
  const freqMap = new Map();

  for (const n of nums) {
    if (freqMap.has(n)) {
      freqMap.set(n, freqMap.get(n) + 1);
    } else {
      freqMap.set(n, 1);
    }
  }

  //         [key, val]
  for (const [n, count] of freqMap) {
    if (count % 2 !== 0) {
      return n;
    }
  }
}

/**
 * Finds the only number that occurs odd times in the given odd-lengthed array.
 * - Time: O(n^2) quadratic
 * - Space: O(1) constant.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs odd times.
 */
function oddOccurrencesInArray3(nums) {
  for (let i = 0; i < nums.length; i++) {
    let cnt = 1;

    // Can't use j = i + 1 because it will mis-count by missing nums before i.
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        cnt++;
      }
    }

    if (cnt % 2 !== 0) {
      return nums[i];
    }
  }
}

console.log(oddOccurrencesInArray(nums1), expected1);
console.log(oddOccurrencesInArray(nums2), expected2);
console.log(oddOccurrencesInArray(nums3), expected3);
console.log(oddOccurrencesInArray(nums4), expected4);
console.log("-----------------------------------");
console.log(oddOccurrencesInArray2(nums1), expected1);
console.log(oddOccurrencesInArray2(nums2), expected2);
console.log(oddOccurrencesInArray2(nums3), expected3);
console.log(oddOccurrencesInArray2(nums4), expected4);
console.log("-----------------------------------");

console.log(oddOccurrencesInArray3(nums1), expected1);
console.log(oddOccurrencesInArray3(nums2), expected2);
console.log(oddOccurrencesInArray3(nums3), expected3);
console.log(oddOccurrencesInArray3(nums4), expected4);