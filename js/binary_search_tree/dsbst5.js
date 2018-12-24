// Question 5
document.write(`<p><b>Q.5. - Binary Tree - </b>Given a binary tree, \
return true if it is BST, else false. For example, the following tree \
is not BST, because 11 is in left subtree of 10.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(10); 

root.left = new TreeNode(5); 
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
  
root.right = new TreeNode(15);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

arr.push(root);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element, 0);
  document.write(`</pre>`);

  let result = checkBST(element);

  document.write("<p>Is given tree BST? : ");
  document.write(result ? "Yes" : "No");
  document.write(`</p>`);

  testcaseNo++;
});

// function
function checkBST(root){
  let t = [];
  inOrder(root, t);
  console.log(t);
  for(let i = 0; i < t.length-1; i++){
    if(t[i] > t[i+1]){
      return false;
    }
  }
  return true;
}

