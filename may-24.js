// Construct Binary Search Tree from Preorder Traversal
/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

 

Constraints:

1 <= preorder.length <= 100
1 <= preorder[i] <= 10^8
The values of preorder are distinct.
*/

var insert = function(root, value) {
    if (root.val >= value) {
        if (root.left) {
            insert(root.left, value);
        } else {
            root.left = new TreeNode(value)
        }
    } else {
        if (root.right) {
            insert(root.right, value);
        } else {
            root.right = new TreeNode(value)
        }
    }
}

var bstFromPreorder = function(preorder) {
    if (!preorder) {
        return null
    } else {
        root = new TreeNode(preorder[0])
        for (let i = 1; i < preorder.length; i++) {
            insert(root, preorder[i])
        }
        return root;
    }
};