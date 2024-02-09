/*
LINEAR SEARCH
--------------

*/

function linear_search(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

const arr = [
  "apple",
  "banana",
  "mango",
  "grapes",
  "pineapple",
  "kiwi",
  "oranges",
  "guava",
  "tomato",
  "strawberry",
];
console.log(linear_search(arr, "kiwi"));
