// Question 3
document.write("<p><b>Q.3. - Array - </b>Given an increasing sequence a[], we \
need to find the K-th missing contiguous element in the increasing sequence which \
is not present in the sequence. If no k-th missing element is there output -1.</p>");

// num of testcase
let noArr;

// array of testcases
let arr = [];

// take number of testcase
noArr = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noArr; i++){
  let noEle = prompt("Enter total number of elements of array of testcase " + (i+1) + "", 1);
  let findNo = prompt("Enter k position of array of testcase " + (i+1) + "", 1);
  let arrT = [];
  for(let j = 0; j < noEle; j++){
    let t = prompt("Enter [" + j + "] element of array of testcase " + (i+1) + "", 1);
    arrT.push(Number(t));
  }

  let temp = {
    array: arrT,
    kth: Number(findNo)
  };

  arr.push(temp);
}

// calling function for each array
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Data : ${element.array}</p>`);
  document.write(`<p>${element.kth} missing number : `);
  findMissing(element.array, element.kth);
  testcaseNo++;
});

// Find missing number
function findMissing(a, k){
  let missing = [];
  for(let i = 0; i < (a.length-1); i++){
    if((a[i]+1) != a[i+1]){
      missing.push(a[i+1]-1);
    }
  }
  if(missing[k-1] == undefined){
    document.write(`-1</p>`);
  }else{
    document.write(`${missing[k-1]}</p>`);
  }
}
