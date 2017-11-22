// Given a binary search tree root node and an integer K, return the Kth largest value

// Input: 	  Node in a Binary Search Tree, Positive integer K
// Output:  Integer
// Time: O(N)
// Space: O(N)

class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(nlogn) solution
function kthLargestValueBST1(root, k) {
  let values = [];
  let queue = [root];

  // DFS pre-order returns an unsorted array
  function traverse(current) {
    if (!current) { return; }
  
    values.push(current.value);
    traverse(current.left);
    traverse(current.right);
  }

  traverse(root);

  values = values.sort(); // sort = O(nlogn)
  let idx = (values.length - 1) - (k - 1);
  return values[idx]; 
}

function kthLargestValueBST(root, k) {
  let values = [];
  let queue = [root];

  // DFS in-order returns a sorted array
  function traverse(current) {
    if (!current) { return; }
  
    traverse(current.left);
    values.push(current.value);    
    traverse(current.right);
  }

  traverse(root);

  let idx = (values.length - 1) - (k - 1);
  return values[idx]; 
}

// [5,4,7,2,6,9]
let a = new TreeNode(5);
let b = new TreeNode(4);
let c = new TreeNode(7);
let d = new TreeNode(2);
let e = new TreeNode(6);
let f = new TreeNode(9);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;

console.log(kthLargestValueBST(a,3)); // => 6
console.log(kthLargestValueBST(a,5)); // => 4

