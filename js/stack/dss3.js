// Question 4
document.write("<p><b>Q.3. - Stack - </b>Given array A[] of integers, \
the task is to complete the function findMaxDiff which finds the maximum \
absolute difference between nearest left and right smaller element of \
every element in array.If the element is the leftmost element, nearest \
smaller element on left side is considered as 0. Similarly if the element \
is the rightmost elements, smaller element on right side is considered as 0.</p>");

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

findMaxDiff(arr);

function findMaxDiff(element){
  let n = element.length;
  let g;
  let left = [];
  let right = [];
  for(let i = 0; i < n; i++){
    g = 0;
    for(let j = i-1; j >= 0; j--){
      if(element[i] > element[j]){
        g = element[j];
        break;
      }
    }
    left.push(g);
    g = 0;
    for(let j = i+1; j < n; j++){
      if(element[i] > element[j]){
        g = element[j];
        break;
      }
    }
    right.push(g);
  }

  document.write("<p>Left : " + left + "<br>");
  document.write("Right : " + right + "<br></p>");

  let res = -1;
  for(let i = 0; i < n; i++){
    res = Math.max(res, Math.abs(left[i] - right[n-1-i]));
  }
  
  document.write("<p>Result : " + res + "</p>");
}