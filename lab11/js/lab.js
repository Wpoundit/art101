// index.js - purpose and description here
// Author: Wyatt Pound
// Date: 5/19/2024

function sortString(inputString) {

  return inputString.split('').sort().join('');
}

$("#submit").click(function(){

const userName = $("#user-name").val();

userNameSorted = sortString(userName);

$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});