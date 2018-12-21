// Question 2
document.write("<p><b>Q.1. - Array - </b>This is a functional problem . Your task is to \
return the product of array elements under a given modulo.</p>");

// num of testcase
let noTestcase;

// array of testcase
let arr = [];

// take number of testcases
noTestcase = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noTestcase; i++){
  let noEle = prompt("Enter total number of elements of array of testcase " + (i+1) + "", 1);
  let arrT = [];
  for(let j = 0; j < noEle; j++){
    let t = prompt("Enter [" + j + "] element of array of testcase " + (i+1) + "", 1);
    arrT.push(Number(t));
  }
  arr.push(arrT);
}

// calling function for each array
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Data : `);
  document.write(`${element}</p>`);
  document.write(`<p>Result : `);
  mulArray(element, element.length);
  testcaseNo++;
});

// Multiply array function
function mulArray(a, n){
  let mul = 1;
  for(let i = 0; i < n; i++){
    mul = mul * a[i];
  }
  document.write(`${mul}</p>`);
}
