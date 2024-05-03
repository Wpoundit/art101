// index.js - Lab 7
// Author: Wyatt Pound
// Date: 5/1//2024
function sortUserName() {
  var userName = window.prompt("Please enter your name:");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}
//output
document.writeln("Hello, ", 
    sortUserName(), "</br>")