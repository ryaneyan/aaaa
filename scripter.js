// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS9haigEMVHKxfMuAYZXtLtInUu8Oi4qQ",
  authDomain: "alt1-732a0.firebaseapp.com",
  databaseURL: "https://alt1-732a0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "alt1-732a0",
  storageBucket: "alt1-732a0.appspot.com",
  messagingSenderId: "358627288961",
  appId: "1:358627288961:web:5d0d5d5103aba16d46aa80",
  measurementId: "G-T07CRQZ26C"
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
  
  const ageBox = document.getElementById("age");
  const ageBoxValue = ageBox.value;
  ageBox.value = "";
  ageBox.focus();
  
  const emailBox = document.getElementById("email");
  const emailBoxValue = emailBox.value;
  emailBox.value = "";
  emailBox.focus();
  
  const commentBox = document.getElementById("comment");
  const commentBoxValue = commentBox.value;
  commentBox.value = "";
  commentBox.focus();


const data = myDB.push();
data.set({name:nameBoxValue, surname:surnameBoxValue,age: ageBoxValueemail:emailBoxValue, comment:commentBoxValue})

}
