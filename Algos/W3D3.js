/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {}

module.exports = { dedupeSorted };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function dedupeSorted(sortedNums) {
  if (sortedNums.length <= 1) {
    return sortedNums;
  }

  const dedupedArr = [];

  for (let i = 0; i < sortedNums.length; i++) {
    // This only works because it's sorted.
    if (sortedNums[i] !== dedupedArr[dedupedArr.length - 1]) {
      dedupedArr.push(sortedNums[i]);
    }
  }
  return dedupedArr;
}

/**
 * Time: O(2n) -> O(n) linear.
 * Space: O(n) linear.
 */
function dedupeSortedInPlace(sortedNums) {
  const deduped = [];

  for (const n of sortedNums) {
    if (deduped[deduped.length - 1] !== n) {
      deduped.push(n);
    }
  }

  // Overwrite so the given array instead of returning a new array.
  for (let i = 0; i < deduped.length; i++) {
    sortedNums[i] = deduped[i];
  }

  sortedNums.length = deduped.length;
  return sortedNums;
}

/**
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 */
function dedupeUnordered(nums) {
  if (nums.length == 0 || nums.length == 1) {
    return nums;
  }

  const seen = {};
  const dedupedArr = [];

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (seen.hasOwnProperty(item) === false) {
      seen[item] = true;
      dedupedArr.push(item);
    }
  }
  return dedupedArr;
}

/**
 * - Time: O(2n) linear. One loop for the new set to iterate over the given
 *    arr, then a second loop for the set to be spread back into an arr.
 * - Space: O(n) linear.
 */
const dedupeSortedUsingSet = (sortedArr) => [...new Set(sortedArr)];

/**
 * - Time: O(2n) -> O(n) linear. The first loop is from the new Set having to
 *    loop over the given array to create the Set.
 * - Space: O(2n) -> O(n) linear. The has Set stores every num again at most in
 *    the case of there being no dupes.
 */
function dedupeInPlace(nums) {
  const numsSet = new Set(nums);

  let i = 0;

  for (const n of numsSet) {
    // Overwrite the array in place.
    nums[i++] = n;
  }

  // If there were dupes the size will be smaller, cut dupes off the end.
  nums.length = numsSet.size;
  return nums;
}

/**
 * Without using a Set.
 * - Time: O(2n) -> O(n) linear. Two loops at same level.
 * - Space: O(2n) -> O(n) linear. The has table duplicates the nums stored.
 */
function dedupeUnorderedInPlace(nums) {
  const isAddedTable = {};

  for (let i = 0; i < nums.length; i++) {
    // Will convert to true when we add it while de-duping.
    isAddedTable[nums[i]] = false;
  }

  let idxToOverwrite = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    // If not added.
    if (!isAddedTable[n]) {
      nums[idxToOverwrite] = n;
      isAddedTable[n] = true;
      idxToOverwrite++;
    }
  }

  // If there were dupes the array will be shorter, cut off dupes from the end.
  nums.length = idxToOverwrite;
  return nums;
}

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {}

module.exports = { firstNonRepeated };

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 */
function firstNonRepeated(nums) {
  const freq = {};

  for (const num of nums) {
    if (freq.hasOwnProperty(num)) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  // obj key order is not guaranteed (unless using a Map instance)
  // so loop back thru nums for the proper order of elems
  for (const num of nums) {
    if (freq[num] === 1) {
      return num;
    }
  }
  return null; // all dupes
}

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 */
function firstUniq(nums) {
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;

    /**
     * If nested loops starts at i + 1, it could give a false positive b/c of
     * only looking for dupes in front and could miss a dupe that came before.
     */
    for (let j = 0; j < nums.length; ++j) {
      if (i !== j && nums[i] === nums[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return nums[i];
    }
  }
  return null; // all dupes
}

/**
 * Will return 0 if all dupes and can't return null when 0 is returned, because
 * 0 could also be a valid answer.
 */
const findUniqueXOR = (arr) => {
  // Instantiate a variable to hold a result.
  let result = 0;
  // Iterate over the array of numbers provided.
  for (const num of arr) {
    // Perform xor operation comparing current result and given number.
    // Can be shortened to result ^= num; shown long-form for clarity.
    result = result ^ num;
  }
  return result;
};