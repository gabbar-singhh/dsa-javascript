// multiple pointer *example own

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let uniqueVal = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(i);
    if (arr[i] !== arr[i - 1]) uniqueVal++;
  }

  return uniqueVal;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// *EXMAPLE MULTIPLE POINTER
/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)

Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;
    if (avg === num) {
      return true;
    }
    if (avg < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

// console.log("++",averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1) )// false
// console.log(averagePair([],4)) // false

// Multiple Pointers - isSubsequence
/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
  if (!str1) return true;

  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    j++;
    if (i === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
