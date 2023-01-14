localStorage.clear()
   class Student{
    constructor(username, password, name, studentclass,  module1, module2, module3, GPA, login){
        this.username = username
        this.password = password
        this.name = name
        this.class = studentclass
        this.modone = module1
        this.modtwo = module2
        this.modthree = module3
        this.GPA = GPA
        this.login = login
    }
}




let student1 = new Student("student1", "password1", "name1", "class1", 4.0, 4.0, 4.0,4.0, false);
let json1 = JSON.stringify(student1)
localStorage.setItem(student1.username,json1)

let student2 = new Student("student2", "password2", "name2", "class1", 3.0, 3.0, 3.0,3.0, false);
let json2 = JSON.stringify(student2)
localStorage.setItem(student2.username,json2)

let student3 = new Student("student3", "password3", "name3", "class1", 4.0, 4.0, 3.8,3.9, false);
let json3 = JSON.stringify(student3)
localStorage.setItem(student3.username,json3)

let student4 = new Student("student4", "password4", "name4", "class1", 4.0, 2.5, 2.7,3.1, false);
let json4 = JSON.stringify(student4)
localStorage.setItem(student4.username,json4)

let senior1 = new Student("Senior1", "SenPW1", "SenName1", "SenClass1", 4, 4, 4, 4, false);
let Sjson1 = JSON.stringify(senior1)
localStorage.setItem(senior1.username,Sjson1)

//This chunk of code gets the username and password entered in by the user 
//It then runs through every student object stored in the local storage
//and checks if the info entered by the user matches to a student and
//sends the user to a page containing that student's info. 

document.querySelector("#submit").addEventListener("click", function(){   
    event.preventDefault();
    var Username = document.getElementById("username").value;
    let jsonuser = JSON.stringify(Username)
    localStorage.setItem("Username",Username)
    var Password = document.getElementById("password").value;
    var user = localStorage.getItem(Username)
    var data = JSON.parse(user)
    
    
    if (Username == "AdminKEVIN" && Password == "KEVINAdmin"){
        window.location.assign("adminpage.html");
    }

    else if(Username == data.username && Password == data.password){ 
        let loginuser = new Student(data.username, data.password, data.name, data.class, data.modone, data.modtwo, data.modthree,data.GPA,true)
        var CLogin = JSON.stringify(loginuser)
        localStorage.setItem(data.username, CLogin)
        window.location.assign("page2.html"); 
        document.getElementById("Name").innerHTML = data.username;                  
        
    }
    


    else{
        alert("Incorrect username or password");                    
        return;
    }
   })

   



   





 

  
  





  