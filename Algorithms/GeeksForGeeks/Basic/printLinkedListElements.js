
//# Print Linked List elements

// Given a linked list. Print all the elements of the linked list.

// SOLUTION

//User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
*/

class Solution {
    display(head) {
        //code here
        let current = head;
        let ouptput = '';
        while (current) {
            ouptput += current.data + ' ';
            current = current.next;
        }
        console.log(ouptput);
    }
}
