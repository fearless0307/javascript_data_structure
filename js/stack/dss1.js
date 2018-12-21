// Question 1
document.write("<p><b>Q.1. - Stack - </b>Delete the middle element of the stack. \
Given a stack with push(), pop(), empty() operations, delete middle of it \
without using any additional data structure.</p>");
// num of test case
let noTest;

// array of Test case
let arr = [];

// take number of test case
noTest = prompt("Enter number of testcases", 1);

// take all the elements of stack
for(let i = 0; i < noTest; i++){
  let noEle = prompt("Enter total number of elements of stack of testcase " + (i+1) + "", 1);
  let s = new Stack();
  for(let j = 0; j < noEle; j++){
    let t = +prompt("Enter [" + j + "] element of stack of testcase " + (i+1) + "", 1);
    s.push(t);
  }
  arr.push(s);
}

let noTestCase = 1;

arr.forEach(function(element){
  document.write(`<p><b>Testcase no ${noTestCase} :</b></p>`);
  document.write("<p>Before deletetion :</p>");
  document.write(element.printStack());
  delMiddle(element, element.length(), 0);
  document.write("<p>After deletetion :</p>");
  document.write(element.printStack());
  noTestCase++;
});

function delMiddle(s, n, c){
  if (s.isEmpty() || c == n) 
    return; 

  let x = s.pop();
          
  delMiddle(s, n, c+1); 
  
  let t = parseInt(n/2,10);
  if (c != t) {
    s.push(x);
  }
}