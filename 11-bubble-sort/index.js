// NOT OPTIMISED!
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[i + j]) {
//         const temp = arr[j];
//         arr[j] = arr[i + j];
//         arr[i + j] = temp;
//       }
//     }
//   }

//   return arr;
// }

console.log(bubbleSort([5, 3, 4, 1, 2]));

// OPTIMISED
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

// time complexity: generally O(N^2)
// best case: O(N)