// Question 4
document.write("<p><b>Q.5. - Stack - </b>Given an array of integers, \
find the nearest smaller number for every element such that the smaller \
element is on left side.If no small element present on the left print -1.</p>");

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

previousSmallerElement(arr);

function previousSmallerElement(element){
  let n = element.length;
  let g;
  document.write("<p>Result :</p><p>");
  for(let i = 0; i < n; i++){
    g = -1;
    for(let j = i-1; j >= 0; j--){
      if(element[i] > element[j]){
        g = element[j];
        break;
      }
    }
    document.write(`${element[i]} ___ ${g}<br>`);
  }
  document.write("</p>")
}