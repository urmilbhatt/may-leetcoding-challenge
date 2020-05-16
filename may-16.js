// Odd Even Linked List
/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/

var oddEvenList = function(head) {
    
    if (head === null) return null;
    
    let odd = [];
    let even = [];
    let result = [];
    let current = head;
    
    while(current !== null){
        result.push(current.val);
        current = current.next;
    }
    
    odd.push(result[0]);
    
    for(let i = 1; i<result.length; i++){
        if (i % 2 === 0) {
            odd.push(result[i]);
        }
        else {
            even.push(result[i]);
        }
    }
    
    odd = odd.concat(even);

    current = head;
    
    let tempHead = { next: current };
    
    for(let i =0; i<odd.length;i++) {
        current.val = odd[i];
        current = current.next;
    }
    
    return tempHead.next;
};