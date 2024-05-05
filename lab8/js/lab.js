// index.js - purpose and description here
// Author: Wyatt Pound
// Date: 5/5/2024

function calculator(x){
  return (x/2);
}

array = [600, 82, 56, 32, 26]
console.log("My Array", array);

var result = array.map(calculator);
console.log("The Array Divided by two:", result);

var result = array.map(function(x){
  return x ** 2;
})
console.log("The Array Squared:", result);