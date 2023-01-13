

const ElName = document.getElementById("Name");
const ElClass = document.getElementById("class");
const ElID = document.getElementById("ID");
Eluser = localStorage.getItem("Username");
var user = localStorage.getItem(localStorage.key(Eluser))
var data = JSON.parse(user)
ElName.innerHTML = "Welcome, " + Eluser;
ElClass.innerHTML = "Class: " + data.class
ElID.innerHTML = "Student ID: " + data.password

