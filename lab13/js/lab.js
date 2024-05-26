// index.js - purpose and description here
// Author: Wyatt Pound
// Date: 5/23/2024




function fizzBuzzBoom(maxNums, factorObj) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; // Clear previous content
  
  for (var num = 1; num <= maxNums; num++) {
    var outputStr = "";
    for (var factor in factorObj) {
      if (num % factor == 0) {
        outputStr += factorObj[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr);
  }
}

function outputToPage(str) {
  var outputDiv = document.getElementById('output');
  var p = document.createElement('p');
  p.textContent = str;
  outputDiv.appendChild(p);
}

function reportError(str) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = "<div class='error'>" + str + "</div>";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    if (!max) {
      reportError("You must provide a maximum");
    } else {
      fizzBuzzBoom(parseInt(max), {3: "Fizz", 5: "Buzz", 7: "Boom"});
    }
  });
});