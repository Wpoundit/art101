// Lab 6
// Author: Wyatt POund
// Date: 4/28/2024

// Define Variables
MyTransport = ["Ford Focus", "Honda Pilot", "Bus"];

// Main Ride Object
myMainRide = {
  make : "Ford",
  model : "Focus",
  color : "White",
  year : 2008,
  age : function() {
    return 2024 - this.year;
  }
}

// Output
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("Kinds of transportation I use: ", MyTransport, "</br>");

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
