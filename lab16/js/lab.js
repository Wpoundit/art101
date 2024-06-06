// index.js - purpose and description here
// Author: Wyatt Pound
// Date: 6/6/2024

$.ajax({
    url: "https://xkcd.com/614/info.0.json",
    type: "GET",
    dataType : "jsonp",
    
    // What do we do when the api call is successful
    success: function(data) {
        $("#output").html("<img src='" + data.img + "' alt='" + data.alt + "' />");
    },
    
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        console.error("Error:", textStatus, errorThrown);
    }
})