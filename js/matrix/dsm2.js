// Question 2
document.write(`<p><b>Q.2. - Matrix - </b>Given an incomplete Sudoku \
configuration in terms of a 9x9 2-D square matrix (mat[ ][ ]) the task \
to check if the configuration has a solution or not.</p>`);

// num of testcase
let noTest;

// array of testcase
let arr = [];

// take number of array
noTest = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noTest; i++){
  let data = prompt("Enter sudoku data " + i + "", "");
  let datas = data.split(" ");
  let d = 0;
  let t = [];
  for(let i = 0; i < 9; i++){
    let t1 = [];
    for(let j = 0; j < 9; j++){
      t1.push(Number(datas[d]));
      d++;
    }
    t.push(t1);
  }
  arr.push(t);
}

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Sodoku<br>`);
  for(let  i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      document.write(`${element[i][j]} , `);
    }
    document.write(`<br>`);
  }
  let result = sudoku(element);
  document.write(`<br>Result : `);
  document.write(result ? "1" : "0");
  document.write(`</p>`);
  testcaseNo++;
});

function sudoku(m){
  // Check line by line first
  for(let i = 0; i < 9; i++){
    for(let j = 1; j <= 9; j++){
      let from = 0;
      let count = 0;
      while(true){
        let t = m[i].indexOf(j, from);
        if( t == -1){
          break;
        }else{
          count++;
          from = t+1;
        }
      }
      if( count > 1){
        return false;
      }
    }
  }
  // Check block by block
  for(let i = 0; i < 9; i=i+3){
    for(let j = 0; j < 9; j=j+3){
      let check = checkBlock(m, i, j);
      if(!check)
        return false;
    }
  }
  return true;
}

function checkBlock(mat , row, col){
  for(let t = 1; t <= 9; t++){
    let count = 0;
    for(let i = row; i < row+3; i++){
      for(let j = col; j < col+3; j++){
        if( mat[i][j] == t){
          count++;
        }
        if(count > 1){
          return false;
        }
      }
    }
  }
  return true;
}
