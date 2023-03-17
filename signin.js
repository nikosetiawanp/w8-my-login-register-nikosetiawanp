// PRESS ENTER TO SIGN IN
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonSignIn").click();
  }
});

document.getElementById("buttonSignIn").addEventListener(
  "click",

  (loginValidate = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      window.location.href = "./data.html";
    } else if (!email || !password) {
      document.getElementById("loginError").innerHTML =
        "&#10060; Email / password is empty!";
    } else {
      document.getElementById("loginError").innerHTML =
        "&#10060; Email / password does not exist";
      document.getElementById("loginError").style.color = "red";
    }
  })
);
