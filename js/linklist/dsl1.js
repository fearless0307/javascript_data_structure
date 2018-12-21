// Question 1
document.write(`<p><b>Q.1. - Linked List - </b>Given a Linked List of integers, \
write a function to modify the linked list such that all even numbers appear \
before all the odd numbers in the modified linked list. Also, keep the order \
of even and odd numbers same.</p>`);

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
  arr.push(head);
}

// call function for each element
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Linked List Data : </p>`);
  travelWrite(element);
  document.write(`<p>Result :</p>`);
  shiftNum(element);
  testcaseNo++;
});

function shiftNum(element) {
  let h;
  let he = element;
  let current = element;
  if(current.value%2 == 0){
    let temp = current;
    he = current;
    while(temp.value%2 == 0){
      h = temp;
      temp = temp.next;
    }
    current = h;
  }else{
    h = undefined;
  }
  while(current.next != undefined){
      if(current.next.value%2 == 0){
        if( h == undefined){
          h = current.next;
          current.next = h.next;
          h.next = he;
          he = h;
        }else{
          let t = h.next;
          h.next = current.next;
          h = h.next;
          current.next = h.next;
          h.next = t;
        }
        continue;
      }
      current = current.next;
  }
  travelWrite(he);
  element = he;
}
