// index.js - purpose and description here
// Author: Wyatt Pound
// Date: 5/5/2024

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

  return text.slice(randStart, randStart + randLen);
}

$("#make-convo").click(function(){
  const newText = generateRandomText();

$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

