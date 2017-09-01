/*
For the purposes of this challenge, we define a binary search tree to be a
binary tree with the following ordering properties:

The  value of every node in a node's left subtree is less than the data value of that node.
The  value of every node in a node's right subtree is greater than the data value of that node.
*/


class Node {
  constructor(value, ...children) {
    this.value = value;
    this.children = children;
  }
}

const checkBST = (root) => {
  var isBST = true;
  var values = [];

  var iterate = (node) => {
    if (node.children.length) {
      let valueCheck = node.children[0].value < node.value && node.children[1].value > node.value;
      let duplicate = values.includes(node.value);

      if (valueCheck && !duplicate) {
        values.push(node.value);
        iterate(node.children[0]);
        iterate(node.children[1]);
      } else {
        isBST = false;
      }
    }
  }

  iterate(root);
  return isBST;
}

// create nodes and create tree 
let node1 = new Node(1);
let node3 = new Node(3);
let node5 = new Node(5);
let node7 = new Node(7);
let node2 = new Node(2, node1, node3);
let node6 = new Node(6, node5, node7);
let node4 = new Node(4, node2, node6);

var result = checkBST(node4);
console.log(result); // expect true


// let node1 = new Node(1);
// let node3 = new Node(3);
// let node5 = new Node(5);
// let node7 = new Node(7);
// let node2 = new Node(2, node3, node1);
// let node6 = new Node(6, node7, node5);
// let node4 = new Node(4, node6, node2);
//
// var result = checkBST(node4);
// console.log(result); // expect false
