function capitalizeFirst(arr) {
  let final_arr = [];
  if (arr.length === 0) return final_arr;

  const capitalizedStr = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  final_arr.push(capitalizedStr);

  console.log(arr, final_arr)

  const damn = capitalizeFirst(arr.slice(1));
console.log(damn, "@@")
  return final_arr;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); 