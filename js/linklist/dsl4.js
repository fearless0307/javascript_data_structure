// Question 4
document.write(`<p><b>Q.4. - Linked List - </b>Write a SortedInsert() function \
which given a list that is sorted in increasing order, and a single node, \
inserts the node into the correct sorted position in the list. While Push() \
allocates a new node to add to the list, SortedInsert() takes an existing node, \
and just rearranges pointers to insert it into the list.</p>`);

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
  let newNode = +prompt("Enter the value of new node", 1);
  let temp = {
    link: head,
    newN: newNode
  }
  arr.push(temp);
}

// call function for each element
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Linked List Data : </p>`);
  travelWrite(element.link);

  document.write(`<p>Value to insert in Linked List : ${element.newN}</p>`);
  sortedInsert(element);

  document.write(`<p>Linked List Data after insertion : </p>`);
  travelWrite(element.link);
  testcaseNo++;
});

function sortedInsert(element){
  let current = element.link;
  let newN = element.newN;

  if(current.value >= newN){
    let newNode = new Node(newN);
    newNode.next = current;
    element.link = newNode;
    return;
  }
  do{
    if(current.value <= newN && current.next == undefined){
      let newNode = new Node(newN);
      current.next = newNode;
      break;
    }
    if(current.value <= newN && current.next.value > newN){
      let newNode = new Node(newN);
      newNode.next = current.next;
      current.next = newNode;
      current = newNode;
      break;
    }
    current = current.next;
  }while (current != undefined);
}
