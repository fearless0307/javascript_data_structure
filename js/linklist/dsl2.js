// Question 2
document.write(`<p><b>Q.2. - Linked List - </b>Write a Count() function that \
counts the number of times a given int occurs in a list. The code for this \
has the classic list traversal structure as demonstrated in Length().</p>`);

// num of test case
let noTest;

// array of Test case
let arr = [];

// take number of test case
noTest = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noTest; i++){
  let noEle = prompt("Enter total number of elements of linked list of testcase " + (i+1) + "", 1);
  head = undefined;
  for(let j = 0; j < noEle; j++){
    let t = +prompt("Enter [" + j + "] element of linked list of testcase " + (i+1) + "", 1);
    append(t);
  }
  let noSearch = +prompt("Enter number to count");
  let temp = {
    link: head,
    search: noSearch
  };
  arr.push(temp);
}

// call function for each element
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Linked List Data : </p>`);
  travelWrite(element.link);
  document.write(`<p>Number to count : ${element.search}</p>`);
  count(element.link, element.search);
  testcaseNo++;
});

function count(element, num){
  let current = element;
  let count = 0;
  if(element == undefined){
    return;
  }
  do{
    if(current.value == num){
      count++;
    }
    current = current.next;
  }while (current != undefined);
  document.write(`<p>Number ${num} is present ${count} times.</p>`);
}
