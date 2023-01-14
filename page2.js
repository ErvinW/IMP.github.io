

const ElName = document.getElementById("Name");
const ElClass = document.getElementById("class");
const ElID = document.getElementById("ID");
Eluser = localStorage.getItem("Username");
var user = localStorage.getItem(localStorage.key(Eluser))
var data = JSON.parse(user)
ElName.innerHTML = "Welcome, " + Eluser;
for (var i = 0; i < localStorage.length; i++){
    var user = localStorage.getItem(localStorage.key(i))
    var data = JSON.parse(user)
    if (data.login == true){
        break
        
    }
}



