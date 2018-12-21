// Question 4
document.write(`<p><b>Q.4. - Matrix - </b>Given an square matrix, turn \
it by 90 degrees in anti-clockwise direction without using any extra space.</p>`);

// num of testcases
let noTest;

// array of testcase
let arr = [];

// take number of testcase
noTest = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noTest; i++){
  let size = prompt("Enter size of square matrix of testcase " + (i+1) + "", 1);
  let t = [];
  for(let i = 0; i < size; i++){
    let t1 = [];
    for(let j = 0; j < size; j++){
      let t2 = +prompt(`Enter value of square matrix [${i}][${j}] of testcase  ${i+1}`, 1);
      t1.push(t2);
    }
    t.push(t1);
  }
  arr.push(t);
}

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Square matrix :<br>`);
  for(let i = 0; i < element.length; i++){
    for(let j = 0; j < element.length; j++){
      document.write(`${element[i][j]} , `);
    }
    document.write('<br>');
  }
  document.write('</p>');
  rotate90(element);
  document.write(`<p>After rotation :<br>`);
  document.write(`Square matrix :<br>`);
  for(let i = 0; i < element.length; i++){
    for(let j = 0; j < element.length; j++){
      document.write(`${element[i][j]} , `);
    }
    document.write('<br>');
  }
  document.write('</p>');
  testcaseNo++;
});

// function to rotate
function rotate90(m){
  let n = m.length;
  for(let i = 0; i < n; i++){
    m[i].reverse();
  }
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(i != j && i > j){
        m[i][j] = m[i][j] + m[j][i];
        m[j][i] = m[i][j] - m[j][i];
        m[i][j] = m[i][j] - m[j][i];
      }
    }
  }
}
