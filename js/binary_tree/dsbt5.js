// Question 5
document.write(`<p><b>Q.5. - Binary Tree - </b>Given a binary tree of \
size N+1, your task is to complete the function tiltTree(), that return \
the tilt of the whole tree. The tilt of a tree node is defined as the \
absolute difference between the sum of all left subtree node values and \
the sum of all right subtree node values. Null nodes are assigned tilt \
to be zero. Therefore, tilt of the whole tree is defined as the sum of \
all nodesâ tilt.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(4); 

root.left = new TreeNode(2); 
root.left.left = new TreeNode(3); 
root.left.right = new TreeNode(5);
  
root.right = new TreeNode(9);
root.right.right = new TreeNode(7); 

arr.push(root);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element, 0);
  document.write(`</pre>`);

  let allNode = [];
  let totalTilt = 0;
  
  tiltTree(element, allNode);
  
  document.write(`<p>Result :<br>`);
  allNode.forEach(function(element){
    document.write(`Tilt of node ${element.node} : ${element.sum}<br>`);
    totalTilt = totalTilt + element.sum;
  });
  document.write(`Tilt of binary tree : ${totalTilt}</p>`);
});

// function that find tilt of tree
function tiltTree(root, nodes){
  if(root == undefined){
    return;
  }

  let nodeSum = {
    node: root.data,
    sum: 0
  };

  let nodeSumLeft = {
    sum: 0
  };

  let nodeSumRight = {
    sum: 0
  };

  if(root.left != undefined){
    sumSubTree(root.left, nodeSumLeft);
  }

  if(root.right != undefined){
    sumSubTree(root.right, nodeSumRight);
  }

  nodeSum.sum = Math.abs(nodeSumLeft.sum - nodeSumRight.sum);
  
  nodes.push(nodeSum);

  tiltTree(root.left, nodes);
  tiltTree(root.right, nodes);
}

// Total sum of subtree
function sumSubTree(root, sum){
  if( root == undefined ){
    return;
  }
  sum.sum = sum.sum + root.data;
  if(root.left != undefined){
    sumSubTree(root.left, sum);
  }
  if(root.right != undefined){
    sumSubTree(root.right, sum);
  }
}