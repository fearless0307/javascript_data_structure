// Question 3
document.write("<p><b>Q.3. - Array - </b>Given two arrays and a number x, find the pair \
whose sum is closest to x and the pair has an element from each array.</p>");

// num of testcase
let noTestcase;

// array of testcase
let arr = [];

// take number of testcase
noTestcase = prompt("Enter number of testcase", 1);

// take all the elements of array
for(let i = 0; i < noTestcase; i++){
  let noEle1 = prompt("Enter total number of elements of 1st array of testcase " + (i+1) + "", 1);
  let noEle2 = prompt("Enter total number of elements of 2nd array of testcase " + (i+1) + "", 1);
  let arrT1 = [];
  let arrT2 = [];
  for(let j = 0; j < noEle1; j++){
    let t = prompt("Enter [" + j + "] element of 1st array of testcase " + (i+1) + "", 1);
    arrT1.push(Number(t));
  }
  for(let j = 0; j < noEle1; j++){
    let t = prompt("Enter [" + j + "] element of 2nd array of testcase " + (i+1) + "", 1);
    arrT2.push(Number(t));
  }
  let pairSum = prompt("Enter sum of pair of testcase " + (i+1) + "", 1);
  let temp = {
    array1: arrT1,
    array2: arrT2,
    pairSum: Number(pairSum)
  };
  arr.push(temp);
}

// call function for each element
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Array 1 : ${element.array1}</p>`);
  document.write(`<p>Array 2 : ${element.array2}</p>`);
  document.write(`<p>Sum of pair : ${element.pairSum}</p>`);
  let temp = findPairSum(element.array1, element.array2, element.pairSum);
  document.write(`<p>Found pair of elements : ${temp}</p>`);
  testcaseNo++;
});

// Find missing number
function findPairSum(a, b, s){
  let t = [];
  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
      let sum = a[i] + b[j];
      if( (sum <= s+1) && (sum >= s-3) ){
        t.push([ a[i], b[j] ]);
      }
    }
  }
  return t;
}
