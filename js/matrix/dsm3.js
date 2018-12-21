// Question 3
document.write(`<p><b>Q.3. - Matrix - </b>Given a N X N matrix (M) filled with \
1 , 0 , 2 , 3 . Your task is to find whether there is a path possible from source \
to destination, while traversing through blank cells only. You can traverse up, \
down, right and left.
<br>A value of cell 1 means Source.
<br>A value of cell 2 means Destination.
<br>A value of cell 3 means Blank cell.
<br>A value of cell 0 means Blank Wall.
<br>Note : there is only single source and single destination.</p>`);

// num of testcase
let noTest;

// array of testcase
let arr = [];

// take number of testcase
noTest = prompt("Enter number of testcases", 1);

let flag;

// take all the elements of array
for(let i = 0; i < noTest; i++){
  let size = prompt("Enter size of square matrix of testcase " + (i+1) + "", 1);
  let data = prompt("Enter matrix data of testcase " + (i+1) + "", "");
  let datas = data.split(" ");
  let d = 0;
  let t = [];
  for(let i = 0; i < size; i++){
    let t1 = [];
    for(let j = 0; j < size; j++){
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
  document.write(`<p>Testcase ${testcaseNo} :<br><br>`);
  document.write(`Path : <br>`);
  for(let i = 0; i < element.length; i++){
    for(let j = 0; j < element.length; j++){
      document.write(`${element[i][j]} , `);
    }
    document.write(`<br>`);
  }
  flag = 0;
  travel(element);
  document.write(`</p><p>Result : `);
  document.write(flag ? "Yes" : "No");
  document.write(`</p>`);
  testcaseNo++;
});

function travel(m){
  let n = m.length;
  let src = [];
  let dest = [];
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(m[i][j] == 1){
        src.push(i);
        src.push(j);
      }
      if(m[i][j] == 2){
        dest.push(i);
        dest.push(j);
      }
    }
  }
  console.log(src);
  console.log(dest);
  travelR(m, src, dest, n);
}

function travelR(m, h, d, n){
  console.log(h);
  let t = [];
  if( flag == 1)
    return;
  
  if(h[1] < n-1 ){
    if(m[h[0]][h[1]+1] == 2 ){
      console.log("R");
      flag = 1;
      return;
    }
    if(m[h[0]][h[1]+1] == 3 ){
      t[0] = h[0];
      t[1] = h[1]+1;
      travelR(m, t, d, n);
    }
  }

  if(h[1] > 0){
    if(m[h[0]][h[1]-1] == 2 ){
      console.log("L");
      flag = 1;
      return;
    }
    if(m[h[0]][h[1]-1] == 3 ){
      t[0] = h[0];
      t[1] = h[1]-1;
      travelR(m, t, d, n);
    }
  }

  if(h[0] < n-1 ){
    if(m[h[0]+1][h[1]] == 2 ){
      console.log("D");
      flag = 1;
      return;
    }
    if(m[h[0]+1][h[1]] == 3 ){
      t[0] = h[0]+1;
      t[1] = h[1];
      travelR(m, t, d, n);
    }
  }
  
  if(h[0] > 0){
    if(m[h[0]-1][h[1]] == 2 ){
      console.log("U");
      flag = 1;
      return;
    }
    if(m[h[0]-1][h[1]] == 3 ){
      t[0] = h[0]-1;
      t[1] = h[1];
      travelR(m, t, d, n);
    }
  }
}
