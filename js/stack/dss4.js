// Question 4
document.write("<p><b>Q.4. - Stack - </b>Given an array A of size N \
having distinct elements, the task is to find the next greater element \
for each element of the array in order of their appearance in the array. \
If no such element exists, output -1.</p>");

// array
let arr = [];

// take number of total element
let noEle = prompt("Enter total number of elements", 1);

// take all the elements of array
for(let i = 0; i < noEle; i++){
  let t = +prompt("Enter the element " + i, "");
  arr.push(t);
}

document.write("<p>Data : ");
document.write(arr + "</p>");

nextGreaterElement(arr);

function nextGreaterElement(element){
  let n = element.length;
  let g;
  document.write("<p>Result :</p><p>");
  for(let i = 0; i < n; i++){
    g = -1;
    for(let j = i+1; j < n; j++){
      if(element[i] < element[j]){
        g = element[j];
        break;
      }
    }
    document.write(`${element[i]} ___ ${g}<br>`);
  }
  document.write("</p>")
}