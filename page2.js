

const ElName = document.getElementById("Name");
const ElClass = document.getElementById("class");
Eluser = localStorage.getItem("Username");
ElName.innerHTML = "Welcome, " + Eluser;
for (let i = 1; i < 9999999 ; i++){
    if (Eluser == "student1"){
        const ElNO = "student" + toString(i);
        console.log(ElNO)
    }
}

