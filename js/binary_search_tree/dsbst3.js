// Question 3
document.write(`<p><b>Q.3. - Binary Tree - </b>Given two BST, Your task \
is to complete the function merge which prints the elements of both BSTs \
in sorted form.</p>`);

// array of testcase
let arr = [];

// Test case1
let root1;
root1 = new TreeNode(3); 

root1.left = new TreeNode(1);
root1.right = new TreeNode(5);

let root2;
root2 = new TreeNode(4); 

root2.left = new TreeNode(2);
root2.right = new TreeNode(6);

let temp = {
  root1: root1,
  root2: root2
};
arr.push(temp);

// Test case2
root1 = new TreeNode(8); 

root1.left = new TreeNode(2);
root1.left.left = new TreeNode(1);
root1.right = new TreeNode(10);

root2 = new TreeNode(5); 

root2.left = new TreeNode(3);
root2.left.left = new TreeNode(0);

temp = {
  root1: root1,
  root2: root2
};
arr.push(temp);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element.root1, 0);
  document.write(`</pre>`);

  document.write(`<pre>`);
  print2D(element.root2, 0);
  document.write(`</pre>`);

  document.write(`<p>Marge two BST :<br>`);
  document.write(merge(element.root1, element.root2));
  document.write(`</p>`);

  testcaseNo++;
});

// function
function merge(root1, root2){
  let arr1 = [];
  inOrder(root1, arr1);

  let arr2 = [];
  inOrder(root2, arr2);

  let i = 0;
  let j = 0;
  let arrM = [];

  let l = arr1.length + arr2.length;
  for(let k = 0; k < l; k++){
    if(arr1[i] < arr2[j] || arr2[j] == undefined){
      arrM.push(arr1[i]);
      i++;
      continue;
    }
    if(arr2[j] < arr1[i] || arr1[i] == undefined){
      arrM.push(arr2[j]);
      j++;
      continue;
    }
  }
  return arrM;
}