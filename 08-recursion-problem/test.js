function fib(num) {
  let prevNum = 0;
  let nextNum = 1;
  let sum;

  for (let i = 0; i < num; i++) {
    sum = prevNum + nextNum;
    prevNum = nextNum;
    nextNum = sum;
  }

  return nextNum;
}

// console.log(fib(4));
console.log(fib(4)) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

/* 
1 1 2 3 5 8 13 21
*/