"use strict";

"use strict";

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

/**
 * Solution 2 -- recursive
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {ListNode} root
 * @returns {void}
 */
function depthFirstValues(root) {
    // empty tree
    if (root === null) return;

    console.log(root.val);
    
    depthFirstValues(root.left);
    depthFirstValues(root.right);
}

console.log( depthFirstValues(a) ); // prints 'a', 'b', 'd', 'e', 'c', 'f'
console.log( depthFirstValues(null) ); // prints undefined