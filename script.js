localStorage.clear()
for (let i = 1; i < 6; i++)
{
    let username = "Username" + i.toString()
    let user = {
    username: username,
    password: "Password" + i.toString()
    }
    let json = JSON.stringify(user)
    localStorage.setItem(username, json);
}


document.querySelector("#submit").addEventListener("click", function(){   
    event.preventDefault();
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;

    var user = localStorage.getItem(Username)
    var data = JSON.parse(user)
    if(Username == data.username && Password == data.password){
        document.querySelector("#form").setAttribute("action", "page2.html")
    }
   })


   