// console.log(bubbleSort([5, 3, 4, 1, 2]));

function bubbleSort(arr) {
  let noSwaps = 0;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

// ques 1
/*
Write a JavaScript function that takes an array of numbers as input and sorts the array in ascending order using the Bubble Sort algorithm. Your function should return the sorted array.
*/

function ques1(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
// console.log(ques1([5, 3, 9, 1, 7]));

// ques 3
/*
Write a function that counts and returns the number of swaps performed during the Bubble Sort process for a given array.
*/

function ques3(arr) {
  let noSwaps;
  let numOfSwaps = 0;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
        numOfSwaps++;
      }
    }
    if (noSwaps) {
      break;
    }
  }

  return numOfSwaps;
}

console.log("ques3: ", ques3([1, 2, 3, 4, 5]));

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log("new", bubbleSort([2, 4, 6, 8, 1, 0]));

function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort2([234, 56, 678, 32, 0]));
