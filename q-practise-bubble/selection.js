console.log(selectionSort([5, 3, 4, 1, 2]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      const temp = arr[lowest];
      arr[lowest] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    const temp = arr[lowest];
    arr[lowest] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log("sel", selectionSort2([23, 434, 2, 3, 0, 12, 25, 776]));