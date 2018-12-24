// Question 1
document.write(`<p><b>Q.1. - Binary Tree - </b>Given a Binary \
Tree you need to find maximum value which you can get by \
subtracting value of node B from value of node A, where A \
and B are two nodes of the binary tree and A is an ancestor \
of B . You are required to complete the function maxDiff. \
You should not read any input from stdin/console. There are \
multiple test cases. For each test case, this method will \
be called individually.</p>`);

// array of testcase
let arr = [];

let root;
root = new TreeNode(8); 
root.left = new TreeNode(3); 
  
root.left.left = new TreeNode(1); 
root.left.right = new TreeNode(6); 
root.left.right.left = new TreeNode(4); 
root.left.right.right = new TreeNode(7); 
  
root.right = new TreeNode(10); 
root.right.right = new TreeNode(14); 
root.right.right.left = new TreeNode(13); 

arr.push(root);

// call function for each testcase
let testcaseNo = 1;
let max;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element, 0);
  document.write(`</pre>`);

  max = 0;
  maxDiff(element, element);
  console.log(max);

  document.write(`Result : ${max}`);
});

// find max difference function
function maxDiff(rootA, rootB){
  let t;
  if(rootA == undefined || rootB == undefined){
    return;
  }
  if(rootB.left != undefined){
    t = rootA.data - rootB.left.data;
    if(max < t){
      max = t;
    }
    maxDiff(rootA, rootB.left);
    maxDiff(rootA.left, rootA.left);
  }

  if(rootB.right != undefined){
    t = rootA.data - rootB.right.data;
    if(max < t){
      max = t;
    }
    maxDiff(rootA, rootB.right);
    maxDiff(rootA.right, rootA.right);
  }
}