
// *** basic bubbleSort implementation ***
// function bubbleSort(array) {
//   for(var i = 0; i < array.length; i++) {
//     var swapped = false;
//
//     for(var j = 1; j < array.length; j++) {
//       if(array[j - 1] > array[j]) {
//         swap(array, j - 1, j);
//         swapped = true;
//       }
//     }
//
//     if (swapped === false) {
//       break;
//     }
//   }
//
//   return array;
// }


// *** slightly more efficient method of implementing bubbleSort ***
const bubbleSort = (array) => {
  let isSorted = false;
  let unsortedArray = array.length - 1;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < unsortedArray; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        isSorted = false;
      }
    }

    unsortedArray--;
  }

  return array;
}


// *** helper function called from within bubbleSort ***
const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


console.log(bubbleSort([3,2,1])); // [ 1, 2, 3 ]
console.log(bubbleSort([1,2,3])); // [ 1, 2, 3 ]
console.log(bubbleSort([1,2,3,0])); // [ 0, 1, 2, 3 ]
console.log(bubbleSort([1,1,4,-3,7,13,0])); // [ -3, 0, 1, 1, 4, 7, 13 ]
console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
