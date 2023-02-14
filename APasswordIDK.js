
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

PasswordEnter= 'on';
passcode="";
Room_names="";


SchoolName= window.localStorage.getItem('SchoolName');
document.getElementById("schoolName").innerHTML= SchoolName;

ClickedRoom= localStorage.getItem('room_name');

function getPass(){firebase.database().ref(SchoolName).child(ClickedRoom).on('value', function(snapshot) {snapshot.forEach(function(grandChildSnapshot) { grandChildKey  = grandChildSnapshot.key; grandChildData = grandChildSnapshot.val();
      firebase_message_id = grandChildKey;
       message_data = grandChildData["Password"];
console.log(firebase_message_id);
console.log(message_data);
passcode= message_data["Password"];

    } );  })}
    getPass();
    

function submit(){  
      console.log(passcode);
reply= document.getElementById("input").value;
localStorage.setItem("codePass", passcode);

                  if(reply == passcode){;
                        window.location= "kwitter_page.html";
                  
                  }
                  else if(reply != passcode){
                   document.getElementById('caution').innerHTML= "Enter a valid password";
                       
                                                 
                  }

      }