// Question 2
document.write("<p><b>Q.2. - Stack - </b>Print Bracket Number. \
Given an expression exp of length n consisting of some brackets. \
The task is to print the bracket numbers when the expression is being parsed.</p>");
// num of test case
let noTest;

// array of Test case
let arr = [];

// take number of test case
noTest = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noTest; i++){
  let exp = prompt("Enter the expression for testcase " + (i+1), "");
  arr.push(exp);
}

let noTestcase = 1;
arr.forEach(function(element) {
  document.write(`<p><b>Testcase ${noTestcase} :</b></p>`);
  document.write(`<p>Expression : ${element}</p>`);
  countBrackets(element, element.length);
});

function countBrackets(element, n){
  let str = "";
  let left = 1;
  let right = new Stack();
  for(let i = 0; i < n; i++){
    if(element.charAt(i) == "("){
      str = str + left;
      right.push(left);
      left++;
    }
    if(element.charAt(i) == ")"){
      str = str + right.peek();
      right.pop();
    }
  }
  document.write("<p>Result :</p>");
  document.write(str);
}
