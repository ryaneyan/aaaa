// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6tS3GCf5S2O86sAZG-UpnWGFw_zzgb2Y",
  authDomain: "alt1-3984d.firebaseapp.com",
  databaseURL: "https://alt1-3984d-default-rtdb.firebaseio.com",
  projectId: "alt1-3984d",
  storageBucket: "alt1-3984d.appspot.com",
  messagingSenderId: "754773598857",
  appId: "1:754773598857:web:c24d797b66a0bc11bb5c58",
  measurementId: "G-YJL677X91R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const myDB = firebase.database().ref("/users");

const btn2 = document.getElementById("submit");
btn2.addEventListener("click", insertRecord);

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
  data.set({
    name: nameBoxValue,
    surname: surnameBoxValue,
    age: ageBoxValue,
    email: emailBoxValue,
    comment: commentBoxValue,
  });
}
