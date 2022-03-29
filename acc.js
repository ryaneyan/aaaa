const firebaseConfig = {
  apiKey: "AIzaSyAnlaehIIwJdrigc52UVSpNLNAjE8uXTIY",
  authDomain: "allllllllllllllt1.firebaseapp.com",
  databaseURL: "https://allllllllllllllt1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "allllllllllllllt1",
  storageBucket: "allllllllllllllt1.appspot.com",
  messagingSenderId: "421102018561",
  appId: "1:421102018561:web:b348097d8560e7a1cda000",
  measurementId: "G-0XVGNYRT1M"
};

firebase.initializeApp(firebaseConfig);

var myDB = firebase.database().ref("Data");

function on(){
  myDB.set({
    "Condition":"on"
  });  
}

function off(){
  myDB.set({
    "Condition":"off"
  });    
}