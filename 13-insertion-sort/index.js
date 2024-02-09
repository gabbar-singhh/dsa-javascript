console.log("Insertion Sort");
console.log("=", insertionSort([8, 3, 1, 7, 4, 2, 9]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {

    for (let j = i; j > 0; j--) {

      if (arr[j] < arr[j - 1]) {
          const temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
      } else {
        break;
      }

    }
    
  }

  return arr;
}