// Given an array of integers values of 0, 1, and 2 (representing Red, White, and Blue), 
// sort them in linear time. 

// Input: Array of Integers where elements values belong to the set S : { 0, 1, 2 }
// Output: Sorted Array

// Example:
// Input: [2, 0, 1, 2, 1, 0]	=>	Output: [0, 0, 1, 1, 2, 2]
// Input: [1, 2, 2, 0]		=>	Output: [0, 1, 2, 2]

// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

// Using a native sorting method is not allowed.

function sortRWB(colors) {
  let count = [0,0,0];
  let sorted = [];

  colors.forEach((color) => {
    count[color]++;
  }); 

  let current = 0;
  while (current < count.length) {
    if (count[current] > 0) {
      sorted.push(current);
      count[current]--;
    } else {
        current++;
    }
  }

  return sorted;
}

console.log(sortRWB([2, 0, 1, 2, 1, 0]));	// => [0, 0, 1, 1, 2, 2]
console.log(sortRWB([1, 2, 2, 0])); // => [0, 1, 2, 2]
