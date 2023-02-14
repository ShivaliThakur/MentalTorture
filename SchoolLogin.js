var firebaseConfig = {
    apiKey: "AIzaSyBPcIn6ATnCNiWZmAApq7vLhpRTGzFJzvA",
    authDomain: "kwitter-app-697e2.firebaseapp.com",
    databaseURL: "https://kwitter-app-697e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-697e2",
    storageBucket: "kwitter-app-697e2.appspot.com",
    messagingSenderId: "745887955150",
    appId: "1:745887955150:web:b1f0687f416b1c9f69f89f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function Register(){
    SName= document.getElementById("SchoolName").value;
    if(SName == ""){
        document.getElementById("check").innerHTML="Please put your School name";
        }
        else{
          addUser();
        }
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
});});}
getData();

function addUser(){
firebase.database().ref("/").child(SName).update({
    Community: "adding room name"
    });
                
                window.location="SchoolRegisterSuccess.html"; // Its yet to be created//
    }



