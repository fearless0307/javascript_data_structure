// Question 5
document.write(`<p><b>Q.5. - Matrix - </b>Given a 2D matrix of size M*N. \
Traverse and print the matrix in spiral form.</p>`);

// num of testcase
let noArr;

// array of testcase
let arr = [];

// take number of testcase
noArr = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noArr; i++){
  let m = prompt("Enter row of testcase " + (i+1) + "", 1);
  let n = prompt("Enter column of testcase " + (i+1) + "", 1);
  let t = [];
  for(let k = 0; k < m; k++){
    let t1 = [];
    for(let j = 0; j < n; j++){
      let t2 = +prompt(`Enter value of matrix [${k}][${j}] of testcase  ${i+1}`, 1);
      t1.push(t2);
    }
    t.push(t1);
  }
  arr.push(t);
}

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase : ${testcaseNo}</p>`);
  document.write(`<p>Matrix :<br>`);
  let m = element.length;
  let n = element[0].length;
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      document.write(`${element[i][j]} , `);
    }
    document.write(`<br>`);
  }
  document.write(`</p>`);
  runSpiral(element, m, n);
  testcaseNo++;
});

function runSpiral(a, m, n){
  document.write(`<p>Result : `);
  let rowS = 0;
  let rowE = m;
  let colS = 0;
  let colE = n;
  let i;
  while( rowS < rowE && colS < colE){
    // first row
    for(i = colS; i < colE; i++){
      document.write(`${a[rowS][i]} , `);
    }
    rowS++;

    // last remaining column
    for(i = rowS; i < rowE; i++){
      document.write(`${a[i][colE-1]} , `);
    }
    colE--;

    if(rowS < rowE){
      // last remaining row
      for(i = colE-1; i >= colS; i--){
        document.write(`${a[rowE-1][i]} , `);
      }
      rowE--;
    }
    
    if(colS < colE){
      // first remaining column
      for(i = rowE-1; i >= rowS; i--){
        document.write(`${a[i][colS]} , `);
      }
      colS++;
    }
  }
  document.write(`</p>`);
}
