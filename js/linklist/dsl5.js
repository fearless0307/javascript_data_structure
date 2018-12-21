// Question 5
document.write(`<p><b>Q.5. - Linked List - </b>Write a RemoveDuplicates() \
function which takes a list sorted in increasing order and deletes any \
duplicate nodes from the list. Ideally, the list should only be traversed once.</p>`);

// num of test case
let noTest;

// array of Test case
let arr = [];

// take number of test case
noTest = prompt("Enter number of testcases", 1);

// take all the elements of array
for(let i = 0; i < noTest; i++){
  let noEle = prompt("Enter total number of elements of sorted linked list of testcase " + (i+1) + "", 1);
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
  document.write(`<p>Sorted Linked List Data : </p>`);
  travelWrite(element);
  removeDuplicates(element);
  document.write(`<p>Linked List Data after removing duplicate data : </p>`);
  travelWrite(element);
  testcaseNo++;
});

function removeDuplicates(element){
  let current = element;
  do{
    if(current.next == undefined){
      break;
    }
    if(current.value == current.next.value){
      current.next = current.next.next;
      continue;
    }
    current = current.next;
  }while (current != undefined);
}
