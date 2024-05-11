// index.js - purpose and description here
// Author: Wyatt Pound
// Date: 5/5/2024


$("#Challenge, #Problems, #Results").on("click", "button", function() {
  $(this).parent().toggleClass("special");
});
  $("#Challenge, #Problems, #Results").each(function() {
    $(this).append("<button class='make-special'>Make Special</button>");
});