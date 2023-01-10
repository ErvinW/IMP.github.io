$(document).ready(function(){
    $("#submit").click(function(){
        var username = document.getElementById("Username").value;
        var password = document.getElementById("Password").value;



        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-30ef.restdb.io/rest/student",
            "method": "GET",
            "headers": {
            "content-type": "application/json",
            "x-apikey": "<your CORS apikey here>",
            "cache-control": "no-cache"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        console.log(response);




    })
})