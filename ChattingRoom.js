
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

first_name= localStorage.getItem("FirstName");
document.getElementById("welcomeTag").innerHTML="Welcome "+ first_name +"!";
PasswordEnter= 'on';
passcode="";
SavedPW= "";
person= "";
Room_names="";


SchoolName= window.localStorage.getItem('SchoolName');
document.getElementById("schoolName").innerHTML= SchoolName;

function getData() {firebase.database().ref(SchoolName).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;if(childKey != "Community"){
      Room_names = childKey;
    console.log("Room_name=" + Room_names);
   row="<div  class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
   document.getElementById("output").innerHTML+= row;

   

}});});}
getData();




function addRoom(){
      room_name= document.getElementById("roomName").value;
      if(room_name == ""){
            document.getElementById("caution").innerHTML="Enter a valid chat room name";
      }
      else{

random_no= Math.floor((963553 * Math.random()));
password= random_no;
console.log("passowrd= "+password);

                  localStorage.setItem("password", password);
                  alert("Kindly note the key to enter the chat room: "  +password+ "\nIt won't be displayed again");
                  localStorage.setItem("room_name", JSON.stringify(room_name));
                  firebase.database().ref(SchoolName).child(room_name).update({
                        Password: password
                  });
                  PasswordEnter= 'off';
                  window.location= "kwitter_page.html"; // Its yet to be created//

                  
      }
}

function redirectToRoomName(name){
      
     console.log(name);
     localStorage.setItem("room_name", JSON.stringify(name));

     
     if (PasswordEnter == 'off'){

             window.location= "kwitter_page.html";
            }
             else if (PasswordEnter == 'on'){
            window.location= 'APAsswordIDK.html';
                        
                                                  
                   }
      }


function logout(){
    window.location= "index.html";
    localStorage.removeItem("SchoolName");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
}