/*
productOfArray
--------------
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60 
*/

function productOfArray(arr) {
  let res = 1;
  if (arr.length === 0) return 1;

  res = arr[0] * productOfArray(arr.splice(1, arr.length));

  return res;
}

console.log(productOfArray([1, 2, 3,10])); // 6
