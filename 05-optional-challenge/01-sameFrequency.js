/*

Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(a, b) {
  if (a.toString().length !== b.toString().length) return false;

  num1 = a.toString();
  num2 = b.toString();

  frequencyCounter1 = {};
  frequencyCounter2 = {};

  for (const i of num1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
  }

  for (const i of num2) {
    frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}