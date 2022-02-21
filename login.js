  function onSubmit() {
    if (
      (document.getElementById("password").value == "password") &
      (document.getElementById("username").value == "sample@gmail.com")
    ) {
      window.location.href = "account.html";
    } else {
      {
        alert("wrong keyword entry");
        return false;
      }
    }
  }