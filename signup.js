// PRESS ENTER TO SIGN UP
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonSignUp").click();
  }
});

// SIGN UP
document.getElementById("buttonSignUp").addEventListener(
  "click",
  (signup = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // CHECK EMAIL
    validateEmail = () => {
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!email) {
        document.getElementById("emailError").innerHTML =
          "You should not leave the email empty";
      } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML =
          "Please type in the correct email address";
      } else {
        document.getElementById("emailError").innerHTML = "&nbsp;";
        return true;
      }
    };
    // CHECK PASSWORD
    validatePassword = () => {
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const numberRegex = /\d/;
      const symbolRegex = /(?=.*?[^\w\s])/;
      if (!password) {
        document.getElementById("passwordError").innerHTML =
          "You should not leave the password empty";
      } else if (symbolRegex.test(password)) {
        document.getElementById("passwordError").innerHTML =
          "Password must not contain special symbol!";
      } else if (!uppercaseRegex.test(password)) {
        document.getElementById("passwordError").innerHTML =
          "Password needs at least 1 uppercase letter!";
      } else if (!lowercaseRegex.test(password)) {
        document.getElementById("passwordError").innerHTML =
          "Password must contain at least 1 lowercase letter!";
      } else if (!numberRegex.test(password)) {
        document.getElementById("passwordError").innerHTML =
          "Password must contain at least 1 number!";
      } else {
        document.getElementById("passwordError").innerHTML = "&nbsp;";
        return true;
      }
    };

    // RUN VALIDATION
    validateEmail();
    validatePassword();

    // SAVE TO LOCAL STORAGE IF EMAIL & PASSWORD PASS TEST
    if (validateEmail() === true && validatePassword() === true) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      window.location.href = "./index.html";
      alert("Sign Up Succesful! You will be redirected soon");
    } else {
      return;
    }
  })
);

// localStorage.setItem(key, value);
// localStorage.getItem(key);
// localStorage.reload();
// localStorage.removeItem();
// localStorage.clear();
