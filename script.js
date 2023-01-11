localStorage.clear()
// for (let i = 1; i < 6; i++)
// {
//     let username = "Username" + i.toString()
//     let user = {
//     username: username,
//     password: "Password" + i.toString()
//     }
//     let json = JSON.stringify(user)
//     localStorage.setItem(username, json);
// }

   class Student{
    constructor(username, password, name, studentclass,  module1, module2, module3, GPA){
        this.username = username
        this.password = password
    }
}




let student1 = new Student("student1", "password1", "name1", "class1", 4.0, 4.0, 4.0,4.0);
let json1 = JSON.stringify(student1)
localStorage.setItem(student1.username,json1)

let student2 = new Student("student2", "password2", "name2", "class1", 3.0, 3.0, 3.0,3.0);
let json2 = JSON.stringify(student2)
localStorage.setItem(student2.username,json2)

let student3 = new Student("student3", "password3", "name3", "class1", 4.0, 4.0, 3.8,3.9);
let json3 = JSON.stringify(student3)
localStorage.setItem(student3.username,json3)

let student4 = new Student("student4", "password4", "name4", "class1", 4.0, 2.5, 2.7,3.1);
let json4 = JSON.stringify(student4)
localStorage.setItem(student4.username,json4)

let senior1 = new Student("Senior1", "SenPW1", "SenName1", "SenClass1", 4, 4, 4, 4);

//This chunk of code gets the username and password entered in by the user 
//It then runs through every student object stored in the local storage
//and checks if the info entered by the user matches to a student and
//sends the user to a page containing that student's info. 
document.querySelector("#submit").addEventListener("click", function(){   
    event.preventDefault();
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;

    var user = localStorage.getItem(Username)
    var data = JSON.parse(user)

    if (Username == "AdminKEVIN" && Password == "KEVINAdmin"){
        window.location.assign("adminpage.html");
    }

    else if(Username == data.username && Password == data.password){    
        window.location.assign("page2.html");                      
        
    }
    


    else{
        alert("Incorrect username or password");                    
        return;
    }
   })





