// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const myDB = firebase.database().ref("/users");

const btn2 = document.getElementById("submit");
btn2.addEventListener("click",insertRecord);

function insertRecord() {
  alert("Submit clicked!");
  
  const nameBox = document.getElementById("fName");
  const nameBoxValue = nameBox.value;
  nameBox.value = "";
  nameBox.focus();
  
  const surnameBox = document.getElementById("sName");
  const surnameBoxValue = surnameBox.value;
  surnameBox.value = "";
  surnameBox.focus();

  
  const emailBox = document.getElementById("email");
  const emailBoxValue = emailBox.value;
  emailBox.value = "";
  emailBox.focus();
  
  const commentBox = document.getElementById("comment");
  const commentBoxValue = commentBox.value;
  commentBox.value = "";
  commentBox.focus();


const data = myDB.push();
data.set({name:nameBoxValue, surname:surnameBoxValue, email:emailBoxValue, comment:commentBoxValue})

}
