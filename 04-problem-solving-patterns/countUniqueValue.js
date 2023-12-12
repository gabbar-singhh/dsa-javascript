/*
# CountUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

// Solution is correct but, forof - O(N) along with Object.keys() - O(N)
function countUniqueValues(arr) {
  const frequencyCounter = {};

  for (const num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  return Object.keys(frequencyCounter).length;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));



// next method!
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;

  let uniqueVal = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueVal++;
    }
  }

  return uniqueVal;
}

console.log(countUniqueValues2([1,2,2,5,7,7,99  ]))