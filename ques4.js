// TODO: Question 4 


// Will use binary tree data structure - TreeNode class

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let maxDepth = -1;
let bottomLeftValue;

function searchBottomLeftValue(root, currentDepth = 0) {
    if (root === null) return;

    
    if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
        bottomLeftValue = root.val;
    }

    
    searchBottomLeftValue(root.left, currentDepth + 1);
    searchBottomLeftValue(root.right, currentDepth + 1);
}


let root = new TreeNode(2);
root.right = new TreeNode(3);
root.left = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.left.left = new TreeNode(6);

searchBottomLeftValue(root);
console.log("Leftmost value in the last row:", bottomLeftValue); 

