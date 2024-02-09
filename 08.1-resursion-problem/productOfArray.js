console.log("hhhh");

function productofArray(arr) {
  let res = 1;
  if (arr.length === 0) return 1;

  res = res * arr[0] * productofArray(arr.slice(1));

  return res;
}

console.log(productofArray([1, 2, 3]));
