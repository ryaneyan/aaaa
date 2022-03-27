  function onSubmit() { //creates the function onSubmit
    if (
      (document.getElementById("password").value == "password") & //gets the data inputted by the user and checks if they match the specified input
      (document.getElementById("username").value == "sample@gmail.com")
    ) {
      window.location.href = "account.html"; //if right send user to account.html
    } else { //if its wrong send alert
      {
        alert("wrong keyword entry");
        return false;
      }
    }
  }