/* 
Multiple Pointers - averagePair
----------------------
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)

Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

*/

// NAIVE SOLUTION (coz time complexity O(N^2))
function averagePair2(arr, avg) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
            console.log("arr[i]", arr[i], "arr[j}", arr[j]);

            if (arr[i] + arr[j]/2 === avg){
                return true
            }
    }
  }
  return false;
}

// console.log(averagePair2([1, 2, 3], 2.2)); // true

// REFACTORED SOLUTION
function averagePair(arr, num) {
 let start = 0;
 let end = arr.length - 1
 
 while (start < end){
    const avg = (arr[start]+arr[end])/2;
    if (avg === num){
        return true
    } if (avg < num){
        start++;
    } else {
        end--;
    }
 }

 return false;
}

console.log(averagePair([1,2,3],2.5)) // true