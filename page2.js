

const ElName = document.getElementById("Name");
const ElClass = document.getElementById("class");
const ElID = document.getElementById("ID");
const ElM1 = document.getElementById("M1");
const ElM2 = document.getElementById("M2");
const ElM3 = document.getElementById("M3");
const ElGPA = document.getElementById("GPA");
Eluser = localStorage.getItem("Username");
var user = localStorage.getItem(localStorage.key(Eluser))
var data = JSON.parse(user)




for (var i = 0; i < localStorage.length; i++){
    var user = localStorage.getItem(localStorage.key(i))
    var data = JSON.parse(user)
    if (data.login == true){
       

        break
        
        
    }
}
ElName.innerHTML = "Welcome, " + data.name;
ElClass.innerHTML = "Class: " + data.class;
ElID.innerHTML = "Student ID: " + data.username;
ElM1.innerHTML = "Module 1: " + data.modone;
ElM2.innerHTML = "Module 2: " + data.modtwo;
ElM3.innerHTML = "Module 3: " + data.modthree;
ElGPA.innerHTML = "Overall GPA: " + data.GPA;



