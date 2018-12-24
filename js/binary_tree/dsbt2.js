// Question 2
document.write(`<p><b>Q.2. - Binary Tree - </b>Given a Complete Binary \
tree, print the level order traversal in sorted order.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(7); 

root.left = new TreeNode(6); 
root.left.left = new TreeNode(3); 
root.left.right = new TreeNode(4);
  
root.right = new TreeNode(5); 
root.right.left = new TreeNode(2); 
root.right.right = new TreeNode(1); 

arr.push(root);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element, 0);
  document.write(`</pre>`);

  let temp = [];
  printSorted(element, 0, temp);
  console.log(temp);

  document.write(`<pre>Result : <br><br>`);
  temp.forEach(function(element){
    element.sort();
    for(let i = 0; i < element.length; i++){
      document.write(`${element[i]}   `);
    }
    document.write(`<br><br>`);
  });
  document.write(`</pre>`);
});

// print in sorted order
function printSorted(root, level, t){
  // Base case 
  if (root == undefined) 
      return; 

  // Increase level
  level += 1; 

  console.log(`${level} : ${root.data}`);
  if(level > t.length){
    t[level-1] = [];
  }
  t[level-1].push(root.data);

  // Process right child
  printSorted(root.right, level, t); 

  // Process left child 
  printSorted(root.left, level, t); 
}