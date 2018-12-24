// Question 1
document.write(`<p><b>Q.1. - Binary Tree - </b>Given a binary tree, Your \
task is to complete the function largestBst that returns the size of the \
largest subtree which is also a Binary Search Tree (BST). If the complete \
Binary Tree is BST, then return the size of whole tree.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(100); 

root.left = new TreeNode(5); 
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(1);
root.left.left.right = new TreeNode(4);
root.left.right = new TreeNode(6);
  
root.right = new TreeNode(15);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

arr.push(root);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element, 0);
  document.write(`</pre>`);

  largest = [];

  largestBST(element, largest);

  if(largest.length == 0){
    document.write(`<p>There is no BST in given binary tree.</p>`);
  }else{
    document.write(`<p>There is total ${largest.length} subtree BST.</p>`);
    let max = 0;
    let maxRoot;
    largest.forEach(function(ele){
      if(ele.height > max){
        max = ele.height;
        maxRoot = ele.tree;
      }
    });
    document.write(`<p>Maximun height is ${max} :</p>`);
    document.write(`<pre>`);
    print2D(maxRoot, 0);
    document.write(`</pre>`);
  }
  testcaseNo++;
});

// function
function largestBST(root, largest) {
  let check = {
    bst: true
  };
  let h = checkBST(root, check);
  if(check.bst){
    let temp = {};
    let arrT = [];
    inOrder(root, arrT);
    temp.tree = root;
    temp.height = h;
    largest.push(temp);
    return;
  }
  if(root.left != undefined){
    largestBST(root.left, largest);
  }
  if(root.right != undefined){
    largestBST(root.right, largest);
  }
}

// check the tree is bst or not and also return the height
function checkBST(root, check) {
  if(!check.bst){
    return 0;
  }
  if(root == undefined){
    return 0;
  }
  let l = 0;
  let r = 0;
  if(root.left != undefined){
    if(root.left.data < root.data){
      l =  checkBST(root.left, check);
    }else{
      check.bst = false;
    }
  }
  if(root.right != undefined){
    if(root.right.data > root.data){
      r = checkBST(root.right, check);
    }else{
      check.bst = false;
    }
  }

  if (l > r) 
    return (l + 1); 
  else 
    return (r + 1);
}