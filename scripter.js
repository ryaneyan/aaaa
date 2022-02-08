// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJAqFxpwLOz2_cbiQfv2NoAMyugzptBcw",
  authDomain: "alt1-a8325.firebaseapp.com",
  projectId: "alt1-a8325",
  storageBucket: "alt1-a8325.appspot.com",
  messagingSenderId: "967382561456",
  appId: "1:967382561456:web:9745403f58540a3d0a4175",
  measurementId: "G-TQNP2DL5GB"
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
data.set({name: nameBoxValue,surname: surnameBoxValue,age: ageBoxValue,email: emailBoxValue,comment: commentBoxValue})

}
