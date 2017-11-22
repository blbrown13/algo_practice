// Given an array of integers and a target, return a pair of indices where the corresponding 
// values in the array add up to the target.

// Input: Array of Integers, Target Integer
// Output: Two element Array of Integers

// Example
// Input: [1, 6, -5, 7, 3], -2      =>	Output: [2,4]
// Input: [1, 9, 10], 8			=>	Output: [-1,-1]

// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)

// If the target integer is not found return [-1, -1].
// Values of the array can be positive or negative integers.

function twoSum(arr, target) {
  let targets = {};

  for (var i = 0; i < arr.length; i++) {
    let num = arr[i];
    let pair = target - num;

    if (targets[pair]) {
      return [i, targets[pair]];
    } else {
        targets[num] = i;
    }
  }

  return [-1,-1];
}

console.log(twoSum([], 1));
console.log(twoSum([1, 6, -5, 7, 3], -2)); // [2,4]
console.log(twoSum([1, 9, 10], 8)); // [-1,-1]
