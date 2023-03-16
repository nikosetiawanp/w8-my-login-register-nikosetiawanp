const getData = localStorage.getItem("data");
const data = JSON.parse(getData) || [
  { id: 1, email: "admin@gmail.com", password: "Admin123" },
];

// PRESS ENTER TO SIGN UP
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonSignUp").click();
  }
});

// SIGN IN
document.getElementById("buttonSignIn").addEventListener(
  "click",
  (signin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    validateEmail = () => {
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!email) {
        document.getElementById("emailError").innerHTML =
          "You should not leave the email empty";
      } else if (!emailRegex.test(email)) {
        alert("Correct");
      }
    };

    validatePassword = () => {
      if (!password) {
        document.getElementById("passwordError").innerHTML =
          "You should not leave the password empty";
      } else {
        alert("OK");
      }
    };

    validateEmail();
    validatePassword();
  })
);
