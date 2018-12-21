// Question 1
document.write("<p><b>Q.1. - Array -</b> Given an array A of size N, construct a Sum Array \
S(of same size) such that S is equal to the sum of all the elements of \
A except A[i]. Your task is to complete the function SumArray(A, N) which \
accepts the array A and N(size of array).</p>");

// num of testcase
let noTestcase;

// array of testcase
let arrTest = [];

// take number of test
noTestcase = prompt("Enter number of Testcases", 1);

// take all the elements of array
for(let i = 0; i < noTestcase; i++){
  let noEle = prompt("Enter total number of elements of array ot testcase " + (i+1) + "", 1);
  let arrT = [];
  for(let j = 0; j < noEle; j++){
    let t = prompt("Enter [" + j + "] element of array of testcase " + (i+1) + "", 1);
    arrT.push(Number(t));
  }
  arrTest.push(arrT);
}

// calling function for each element
let testcaseNo = 1;
arrTest.forEach(function(element) {
  document.write(`<p>Testcase no : ${testcaseNo}</p>`);
  document.write(`<p>Data : `);
  document.write(`${element}</p>`);
  document.write(`<p>Result of Testcase ${testcaseNo} :</p>`);
  sumArray(element, element.length);
  testcaseNo++;
});

// Sum array function
function sumArray(a, n){
  let sumArr = [];
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum = 0;
    for(let j = 0; j < n; j++){
      if(i == j){
        continue;
      }
      sum = sum + a[j];
    }
    sumArr.push(sum);
  }
  document.write(`<p>${sumArr}</p>`);
}
