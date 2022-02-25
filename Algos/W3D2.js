/* 
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete

    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {}

module.exports = { binarySearch };

/*****************************************************************************/

/**
 * - Time: O(n log(n)) logarithmic due to divide and conquer approach
 *    (continually splitting in half).
 * - Space: O(1) constant.
 */
function binarySearch(sortedNums, searchNum) {
  let leftIdx = 0;
  let rightIdx = sortedNums.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(rightIdx - leftIdx / 2);

    if (sortedNums[midIdx] === searchNum) {
      return true;
      // Bonus:
      // return countAdjacentDupes(sortedNums, midIdx);
    }

    if (searchNum < sortedNums[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
  return false;
  // Bonus:
  // return 0;
}

function countAdjacentDupes(arr, idx) {
  let count = 1;
  let elem = arr[idx];

  if (idx < 0 || idx >= arr.length) {
    return 0;
  }

  for (
    let leftIdx = idx - 1, rightIdx = idx + 1;
    leftIdx >= 0 || rightIdx <= arr.length - 1;
    leftIdx--, rightIdx++
  ) {
    const leftElem = arr[leftIdx];
    const rightElem = arr[rightIdx];

    if (leftElem === elem) {
      count++;
    }

    if (rightElem === elem) {
      count++;
    }
  }
  return count;
}

/**
 * Exponential search (O(log n) logarithmic time) can out-perform binary search
 *    when the element being searched for is near the beginning of the array.
 *    Exponential search narrows down the array first, then calls binary search
 *    on the narrowed down array.
 * - Time: O(log2 i) where i is the location where searchNum is located.
 * - Space: O(1) constant.
 */
function exponentialSearch(sortedNums, searchNum) {
  if (sortedNums[0] === searchNum) {
    return true;
  }

  // repeatedly double i to quickly narrow down range
  let i = 1;
  while (i < sortedNums.length && sortedNums[i] <= searchNum) {
    i *= 2;
  }

  return binarySearch(
    sortedNums,
    searchNum,
    i / 2,
    Math.min(i, sortedNums.length)
  );
}

/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {}

module.exports = { interleaveArrays };

/*****************************************************************************/

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(max(n, m)) linear. n = arr1.length, m = arr2.length.
 * - Space: O(n + m) linear. Each item from both arrays is included in new arr.
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  const interleavedItems = [];
  let largerArr = arr1;

  if (arr2.length > arr1.length) {
    largerArr = arr2;
  }

  for (let i = 0; i < largerArr.length; i++) {
    if (i < arr1.length && i < arr2.length) {
      interleavedItems.push(arr1[i], arr2[i]);
    } else {
      interleavedItems.push(largerArr[i]);
    }
  }

  return interleavedItems;
}

function interleaveArrays2(arr1, arr2) {
  const interleavedItems = [];
  let largerArr = arr1;

  if (arr2.length > arr1.length) {
    largerArr = arr2;
  }

  // var is used instead of let here so i will still exist after the loop.
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    interleavedItems.push(arr1[i], arr2[i]);
  }

  for (let j = i; j < largerArr.length; j++) {
    interleavedItems.push(largerArr[j]);
  }

  return interleavedItems;
}

function interleaveArrays3(arr1, arr2) {
  const interleavedItems = [];
  // condition ? returned-if-true : returned-if-false
  let largerArr = arr1.length > arr2.length ? arr1 : arr2;

  // var is used instead of let here so i will still exist after the loop.
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    interleavedItems.push(arr1[i], arr2[i]);
  }

  // concat the remaining items from the larger array.
  return interleavedItems.concat(largerArr.slice(i));
}