/*
This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.
*/


// inefficient code
function slidingWindow1(arr, num) {
    if (num > arr.length) return null;

    let res = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > res) {
            res = temp;
        }
    }
    return res;
}

/*
console.log(slidingWindow1([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(slidingWindow1([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(slidingWindow1([4, 2, 1, 6], 1)); //6
console.log(slidingWindow1([4, 2, 1, 6, 2], 4)); // 13
console.log(slidingWindow1([], 4)); //null
*/
console.log("***");

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];

        if (tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); //null