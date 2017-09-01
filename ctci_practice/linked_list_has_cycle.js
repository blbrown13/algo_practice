// ** Linked Lists: Detect a Cycle **

// create node class
var Node = function(data, next) {
    this.data = data;
    this.next = next;
}

// function to detect a cycle in a linked list
var hasCycle = function(head) {
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

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');

a.next = b;
b.next = c;
c.next = b;

console.log(a);
console.log(b);
console.log(c);

console.log(hasCycle(a));


var d = new Node('d');
var e = new Node('e');
d.next = e;

console.log(hasCycle(d));
