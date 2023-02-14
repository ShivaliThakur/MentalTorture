var firebaseConfig = {
    apiKey: "AIzaSyBPcIn6ATnCNiWZmAApq7vLhpRTGzFJzvA",
    authDomain: "kwitter-app-697e2.firebaseapp.com",
    databaseURL: "https://kwitter-app-697e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-697e2",
    storageBucket: "kwitter-app-697e2.appspot.com",
    messagingSenderId: "745887955150",
    appId: "1:745887955150:web:b1f0687f416b1c9f69f89f"
  };

  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("FirstName");
  room_name= JSON.parse(window.localStorage.getItem("room_name"));
  SchoolName= window.localStorage.getItem('SchoolName');
  liked= 0;

function getData() { firebase.database().ref(SchoolName).child(room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(grandChildSnapshot) { grandChildKey  = grandChildSnapshot.key; grandChildData = grandChildSnapshot.val(); if(grandChildKey != "Password") {
       firebase_message_id = grandChildKey;
       message_data = grandChildData;
console.log(firebase_message_id);
console.log(message_data);
msg= message_data['message'];
name= message_data['name'];
name_with_tag= "<h4>" + name ;
message_with_tag= "<h4 class= 'message_h4'>" + msg + "</h4><hr>";
row= name_with_tag+ message_with_tag;
document.getElementById("output").innerHTML+= row;



//End code
    } });  }); }


    
getData();





function logout(){
    window.location= "index.html";
    localStorage.removeItem("room_name");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
}

function send(){
    msg= document.getElementById("message").value;
    console.log(msg);
    if (msg !== ""){
         firebase.database().ref(SchoolName).child(room_name).push({
        message: msg,
        name: user_name
  });
  document.getElementById("message").value= "";}
   
}
