// Question 3
document.write(`<p><b>Q.3. - Linked List - </b>Write a Pop() function that is \
the inverse of Push(). Pop() takes a non-empty list, deletes the head node, \
and returns the head node's data. If all you ever used were Push() and Pop(), \
then our linked list would really look like a stack. However, we provide more \
general functions like GetNth() which what make our linked list more than just \
a stack. Pop() should assert() fail if there is not a node to pop.</p>`);

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
  let pos = +prompt("Enter the position of data you want", 1);
  let temp = {
    link: head,
    pos: pos
  }
  arr.push(temp);
}

// call function for each element
let testcaseNo = 1;
arr.forEach(function(element) {
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  document.write(`<p>Linked List Data before Pop : </p>`);
  travelWrite(element.link);

  getNth(element.link, element.pos);

  pop(element);
  
  document.write(`<p>Linked List Data after Pop : </p>`);
  travelWrite(element.link);
  
  getNth(element.link, element.pos);
  testcaseNo++;
});

function pop(element){
  if(element.link == undefined){
    return;
  }
  document.write(`<p>Delete head node which value : ${element.link.value}</p>`);
  element.link = element.link.next;
}

function getNth(element, pos){
  let current = element;
  if(element == undefined){
    return;
  }
  let count = 0;
  do{
    if(count+1 == pos){
      document.write(`<p>Value at ${pos} position is ${current.value}.</p>`);
      return;
    }
    count++;
    current = current.next;
  }while (current != undefined);
  document.write(`<p>No data at ${pos} position.</p>`);
}
