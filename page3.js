for (var i = 0; i < localStorage.length; i++){
    var user = localStorage.getItem(localStorage.key(i))
    var data = JSON.parse(user)
    
    if(data.login != true){
        var Entry = document.createElement("tr")
        var Info = document.createElement("td")
        var Info2 = document.createElement("td")
        var Info3 = document.createElement("td")
        // Entry.appendChild(Info)
        // Entry.appendChild(Info2)
        // Entry.appendChild(Info3)
        var Test = document.createTextNode(data.name)
        var Test2 = document.createTextNode(data.class)
        var Test3  =document.createTextNode(data.GPA)

        Info.appendChild(Test)
        Info2.appendChild(Test2)
        Info3.appendChild(Test3)

        Entry.appendChild(Info)
        Entry.appendChild(Info2)
        Entry.appendChild(Info3)

        var Table = document.getElementById("table");
        document.body.insertBefore(Entry,Table);

        
    }
    
}

