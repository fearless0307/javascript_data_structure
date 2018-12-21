// Stack class 
class Stack { 
  
  // Array is used to implement stack 
  constructor() { 
      this.items = []; 
  } 

  // push function 
  push(element) { 
    // push element into the items 
    this.items.push(element);   
  }
  
  // pop function 
  pop() { 
    if (this.items.length == 0) 
        return "No data"; 
    return this.items.pop(); 
  }

  // peek function 
  peek() { 
    return this.items[this.items.length - 1]; 
  }  

  // lenght function
  length(){
    return this.items.length;
  }

  // isEmpty function 
  isEmpty() {
    return this.items.length == 0; 
  }

  printStack() { 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    return str; 
  }
} 