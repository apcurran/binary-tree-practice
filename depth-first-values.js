"use strict";

// Iterative solution
// Time: O(n)
// Space: O(n)

class ListNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");
const e = new ListNode("e");
const f = new ListNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

function depthFirstValues(root) {
    if (root === null) return [];

    let stack = [root];
    let resultArr = [];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        resultArr.push(currentNode.val);
        
        if (currentNode.right) {
            stack.push(currentNode.right);
        }

        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }

    return resultArr;
}

console.log( depthFirstValues(a) ); // [ 'a', 'b', 'd', 'e', 'c', 'f' ]
console.log( depthFirstValues(null) ); // []