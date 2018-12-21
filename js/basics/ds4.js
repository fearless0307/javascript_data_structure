// Question 3
document.write("<p><b>Q.3. - Array - </b>Write a program to input a list of \
n integers in an array and arrange them in a way similar to the to-and-fro \
movement of a Pendulum.<br>The minimum element out of the list of integers, \
must come in center position of array. If there are even elements, then \
minimum element should be moved to (n-1)/2 index (considering that indexes \
start from 0)<br>The next number (next to minimum) in the ascending order, \
goes to the right, the next to next number goes to the left of minimum number \
and it continues like a Pendulum.</p>");

// num of testcase
let noTestcase;

// array of testcase
let arr = [];

// take number of testcases
noTestcase = prompt("Enter number of testcase", 1);

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

// call function for each element
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Data : ${element}</p>`);
  pendulum(element, element.length);
  testcaseNo++;
});

// Pendulum function
function pendulum(a, n){
  let t = [];
  let h = parseInt((n-1)/2, 10);
  let r = 1;
  let l = 1;
  a.sort();
  t[h] = a[0];
  for(let i = 1; i < n; i++){
    if(i%2 == 0){
      t[h+l] = a[i];
      l++;
    }else{
      if( (h-r) < 0){
        t[h+l] = a[i];
        l++;
      }else{
        t[h-r] = a[i];
        r++;
      }
    }
  }
  document.write("<p>Pendulum : ");
  document.write(`${t}</p>`);
}
