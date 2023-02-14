
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


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room_name=" +Room_names);
   row="<div  class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>  " + Room_names + "</div> <hr>";
   document.getElementById("output").innerHTML+= row;
    });});}
getData();



function redirectToRoomName(name){
            console.log(name);
            window.localStorage.setItem("SchoolName", name);
            window.location= "ChattingRoom.html";
            FirstName= document.getElementById('firstName').value;
LastName= document.getElementById('lastName').value;

localStorage.setItem("FirstName", FirstName);
localStorage.setItem("LastName", LastName);
    
}

