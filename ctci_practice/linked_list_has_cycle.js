
// ** Linked Lists: Detect a Cycle **

'use strict';

// create node class using ES6 style
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// function to detect a cycle in a linked list
const hasCycle = (head) => {
  var history = [];
  var hasCycle = false;

  var iterate = function(node) {
    if (history.includes(node)) {
      hasCycle = true;
    } else {
      if (node.next) {
        history.push(node);
        iterate(node.next);
      }
    }
  }

  iterate(head);
  return hasCycle;
}

// create new instances of nodes
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
// link nodes with cycle
a.next = b;
b.next = c;
c.next = b;

let resultA = hasCycle(a);
console.log(resultA); // expect true

// create new nodes with no cycle
let d = new Node('d');
let e = new Node('e');
d.next = e;

let resultD = hasCycle(d);
console.log(resultD); // expect false
