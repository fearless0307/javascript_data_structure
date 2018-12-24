// Question 2
document.write(`<p><b>Q.2. - Binary Tree - </b>Given a Binary Search \
Tree (BST) and a node no 'x' , your task is to delete the node 'x' \
from the BST . You are required to complete the function deleteNode. \
You should not read any input from stdin/console. There are multiple \
test cases. For each test case, this method will be called \
individually.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(50); 

root.left = new TreeNode(30); 
root.left.left = new TreeNode(20); 
root.left.right = new TreeNode(40);
  
root.right = new TreeNode(70);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

let x = 20;

let node = {
  tree: root,
  num: x
};

arr.push(node);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element.tree, 0);
  document.write(`</pre>`);

  document.write(`<p>Node to delete : ${element.num}`);
  deleteNode(element, "", element.tree, element.num);

  document.write(`<p>After deletion :</p>`);
  document.write(`<pre>`);
  print2D(element.tree, 0);
  document.write(`</pre>`);

  element.num = 30;
  document.write(`<p>Node to delete : ${element.num}`);
  deleteNode(element, "", element.tree, element.num);

  document.write(`<p>After deletion :</p>`);
  document.write(`<pre>`);
  print2D(element.tree, 0);
  document.write(`</pre>`);

  element.num = 50;
  document.write(`<p>Node to delete : ${element.num}`);
  deleteNode(element, "", element.tree, element.num);

  document.write(`<p>After deletion :</p>`);
  document.write(`<pre>`);
  print2D(element.tree, 0);
  document.write(`</pre>`);
  testcaseNo++;
});

// function for delete the node
function deleteNode(parent, side, root, num){
  if(root.data == num){
    let arrT = [];
    inOrder(root, arrT);
    var index = arrT.indexOf(num);
    if (index > -1) {
      arrT.splice(index, 1);
    }
    let rootT;
    rootT = convertToBst(arrT, 0, arrT.length - 1);
    if(parent.tree == undefined){
      if(side == "left"){
        parent.left = rootT;
      }
      if(side == "right"){
        parent.right = rootT;
      }
    }else{
      parent.tree = rootT;
    }
    return;
  }
  if(num > root.data){
    deleteNode(root, "right", root.right, num);
  }else{
    if(num < root.data){
      deleteNode(root, "left", root.left, num);
    }
  }
}

// covert array to BST
function convertToBst(arr, start, end){
  if (start > end) { 
    return null; 
  } 
  let mid = parseInt((start + end) / 2, 10);
  let nodeT = new TreeNode(arr[mid]);
  nodeT.left = convertToBst(arr, start, mid - 1); 
  nodeT.right = convertToBst(arr, mid + 1, end); 
  return nodeT;
}