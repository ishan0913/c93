
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCmdy8Qs2kZAwZC2THHujgRyzcJOn2pwAQ",
      authDomain: "class-test-812cf.firebaseapp.com",
      databaseURL: "https://class-test-812cf-default-rtdb.firebaseio.com",
      projectId: "class-test-812cf",
      storageBucket: "class-test-812cf.appspot.com",
      messagingSenderId: "505034044854",
      appId: "1:505034044854:web:7f8a392b5025168f73fd17"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
