// Question 4
document.write(`<p><b>Q.4. - Binary Tree - </b>Given a binary tree of size N \
and two nodes. Your task is to complete the function NumberOFTurn() that \
should return the count of the number of turns needs to reach from one node \
to another node of the Binary tree.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(1); 

root.left = new TreeNode(2); 
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(8); 
root.left.right = new TreeNode(5);
  
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.left.left = new TreeNode(9);
root.right.left.right = new TreeNode(10);
root.right.right = new TreeNode(7);

arr.push(root);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element, 0);
  document.write(`</pre>`);

  numberOFTurn(element);
  
});

// function
function numberOFTurn(root){
  
}