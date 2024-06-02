// index.js - purpose and description here
// Author: Wyatt Pound
// Date: 6/2/2024

$("#activate").click(function() {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        success: function(data) {
            $("#output").text(data.value);
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
       }
   })
})