class TreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);

a.left = b;
a.right = c;
c.right = d;

console.log(a);

function longestPathBST(root) {
  let maxDepth = 0;

  function traverse(currNode, currDepth) {
    if (currNode === null) { return; }
    maxDepth = Math.max(maxDepth, currDepth);

    if (currNode.left) {
      traverse(currNode.left, currDepth + 1);
    }

    if (currNode.right) {
      traverse(currNode.right, currDepth + 1);
    }
  }

  traverse(root, 0);

  return maxDepth + 1;
}

console.log(longestPathBST(a));