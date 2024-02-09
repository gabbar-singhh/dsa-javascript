// function reverse(n){
// if (n === 0)  return 0;

// console.log(n)
// return reverse(n-1)
// }

function reverse(str) {
  let final;
  if (str.length === 0) return;

  if (str.length === 1) {
    return str;
  } else {
    final = str[str.length - 1] + reverse(str.slice(0, -1));
  }

  return final;
}

const res = reverse("hello");

console.log(res);
