// Question 1
document.write(`<p><b>Q.1. - Matrix - </b>There is the Rectangular path for a \
Train to travel consisting of n and m rows and columns respectively. The train \
will start from one of grid cells and it will be given a command in the form of \
String s. consisting of characters âLâ, âRâ, âUâ, âDâ.The train will follow the \
instructions of the command string, where 'L' corresponds moving to the left, \
'R' towards the right, 'U' for moving up, and 'D' means down.<br>You have already \
selected the command string s, and are wondering if it is possible to place the \
train in one of the grid cells initially and have it always stay entirely within \
the grid upon execution of the command string s. Output â1â if there is a starting \
cell for which the train doesnât fall off the grid(track) on following command s, \
otherwise, output "0".</p>`);

// num of testcase
let noTest;

// array of testcase
let arr = [];

// take number of testcase
noTest = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noTest; i++){
  let row = prompt("Enter row of testcase " + (i+1) + "", 1);
  let col = prompt("Enter column of testcase " + (i+1) + "", 1);
  let command = prompt("Enter command of testcase " + (i+1) + "", "");
  arrT = {
    row: Number(row),
    col: Number(col),
    command: command
  }
  arr.push(arrT);
}

// call function for each element
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} : </p>`);
  document.write(`<p>Row : ${element.row}<br>`);
  document.write(`Column : ${element.col}<br>`);
  document.write(`Command : ${element.command}</p>`);
  runTrain(element.row, element.col, element.command);
  testcaseNo++;
});

function runTrain(r, c, com){
  let comm = com.split("");
  let checkt = false;
  for(let i = 0; i < r; i++){
    for(let j = 0; j < c; j++){
      let t = [i,j];
      let check = true;
      for(let co of comm){
        switch (co) {
          case "L":
            t[1] = t[1] - 1;
            break;
          case "R":
            t[1] = t[1] + 1;
            break;
          case "U":
            t[0] = t[0] - 1;
            break;
          case "D":
            t[0] = t[0] + 1;
            break;
        }
        if( (t[0] >= r) || (t[0] < 0) || (t[1] >= c) || (t[1] < 0) ){
          check = false;
          break;
        }
      }
      if(check){
        checkt = true;
        break;
      }

    }
    if(checkt)  break;
  }
  document.write(`<p>Result : `);
  document.write(checkt ? "1" : "0");
  document.write(`</p>`);
}
