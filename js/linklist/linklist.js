class Node {
  constructor(value) {
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get next() {
    return this._next;
  }

  set next(node) {
    this._next = node;
  }
}

let head;

function travel(temp) {
  console.log("Traversing");
  if(temp == undefined){
    console.log("No data");
    return;
  }
  let current = temp;
  console.log(current);
  do{
    console.log(current.value + " : ");
    current = current.next;
  }while (current != undefined);
}

function travelWrite(temp){
  document.write(`<p>`);
  if(temp == undefined){
    document.write("No data.</p>");
    return;
  }
  let current = temp;
  do{
    document.write(current.value + " : ");
    current = current.next;
  }while (current != undefined);
  document.write(`</p>`);
}

function append(data) {
  console.log("Appending");
  let current = head;
  if(head == undefined){
    head = new Node(data);
    return;
  }
  while(current.next != undefined){
    current = current.next;
  }
  current.next = new Node(data);
}

function prepend(data) {
  let newHead = new Node(data);
  newHead.next = head;
  head = newHead;
}

function deleteWithValue(data) {
  if( head == undefined){
    return;
  }
  if(head.value == data){
    head = head.next;
    return;
  }
  let current = head;
  while(current.next != undefined){
    if(current.next.value == data){
      current.next = current.next.next;
    }
  }
}
