

function Generate(){
    lName= document.getElementById("UserLastName").value;
    fName= document.getElementById("UserFirstName").value;
    localStorage.setItem("LastName", lName);
    localStorage.setItem("FirstName", fName);

    if(lName & fName == ""){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else if(fName == ""){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else if(lName == ""){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else{
        
        
        randomNo= Math.floor(Math.random() * 100);
        randomNo2= Math.floor(Math.random() * 50);
        un1= fName+lName+randomNo+"  ";
        un2= fName+"*"+lName+ randomNo2+ "  ";
        un3= fName+lName+"@"+Math.floor(Math.random() * 100)+"  ";
        Username=[un1, un2, un3];
        img="<img src='man.png' class='logo'><br>"
        label1="<label> Suggested User names </label><br>";
        label2="<label onclick='change1()' style='color: darkseagreen; font-size: smaller; font-family: Comic;' id='SuggNames'>  </label><br>";
        label3="<label onclick='change2()' style='color: darkseagreen; font-size: smaller; font-family: Comic;' id='SuggNames2'>  </label><br>";
        label4="<label onclick='change3()' style='color: darkseagreen; font-size: smaller; font-family: Comic;' id='SuggNames3'>  </label><br>";
        label5="<h6> User Name : </h6>";
        input1="<input type='text' id='userName' placeholder= 'User Name'><br><br>";
        button= "<button id='login' class='btn btn-success' onclick='addUser()'> Login</button>";
        
        combine= img+label1+ label2+ label3+label4+label5+input1+button;
        document.getElementById("output1").innerHTML= combine;
        document.getElementById("SuggNames").innerHTML=un1;
        document.getElementById("SuggNames2").innerHTML=un2;
        document.getElementById("SuggNames3").innerHTML=un3;
        document.getElementById("login_div").innerHTML="";
    }
}

function change1(){
    document.getElementById("userName").innerHTML= un1;
}

function change2(){
    document.getElementById("userName").innerHTML= un2;
}

function change3(){
    document.getElementById("userName").innerHTML= un3;
}


function addUser(){
    add_user= document.getElementById("userName").value;
    localStorage.setItem("UserName", add_user);
    window.location= "kwitter_room.html";
}


