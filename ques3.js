// TODO: Question 3 

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countNodes(root) {
    if (!root) {
        return 0;
    }

    const leftHeight = calculateHeight(root.left);
    const rightHeight = calculateHeight(root.right);

    if (leftHeight === rightHeight) {
        
        return Math.pow(2, leftHeight + 1) - 1;
    } else {
        
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
}

function calculateHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.left;
    }
    return height;
}

const root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

const totalNodes = countNodes(root);
console.log("Total nodes in the binary tree:", totalNodes); 
