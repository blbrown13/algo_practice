// Given a positive integer represented by an array of digits, add one to that number.

// Input: Array of integers
// Output: Array of integers

// Input: [1,2,3]      	=>	Output: [1,2,4]
// Input: [1, 9]		=>	Output: [2,0]

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)


function addOne(arr) {
  if (!arr.length) {
    throw new Error("Array can't be empty!");
  }

  let end = arr.length - 1;

  while(end >= 0) {
    if (arr[end] === 9) {
      if (end !== 0) {
        arr[end] = 0;
        end--;
      } else {
        arr[end] = 0;
        arr.unshift(1);
        end--;
      }  
    } else {
        arr[end]++;
        break;
    }
  }
  
  return arr;
}

console.log(addOne([1,2,3])); // [1,2,4]
console.log(addOne([1, 9])); // [2,0]
console.log(addOne([9,9,9,9])); // [1,0,0,0,0];

