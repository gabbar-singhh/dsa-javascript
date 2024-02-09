console.log("Selection Sort");

// function selectionSort(arr) {
//   let smallestVal;
//   let temp;

//   for (let i = 0; i < arr.length; i++) {
//     smallestVal = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[i + 1]) {
//         temp = arr[i];
//       }
//     }

//     if (temp < smallestVal) {
//       smallestVal = temp;
//     }
//   }

//   return arr;
// }

console.log(selectionSort([5, 3, 4, 1, 2]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}
