// document
//   .getElementById("emailSignUp")
//   .addEventListener("input", () => validateEmailSignUp("email"));

// document
//   .getElementById("passwordSignUp")
//   .addEventListener("input", () => validatePasswordSignUp("password"));

// validateEmailSignUp = () => {
//   let email = document.getElementById("emailSignUp").value;
//   let emailRegex =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   if (!email) {
//     document.getElementById("emailError").innerHTML =
//       "You should not leave the email empty";
//   } else if (!emailRegex.test(email)) {
//     document.getElementById("emailError").innerHTML =
//       "Please type in the correct email address";
//   } else {
//     document.getElementById("emailError").innerHTML = "Email valid";
//     document.getElementById("emailError").style.color = "lightgreen";
//     return true;
//   }
// };
// validatePasswordSignUp = () => {
//   let password = document.getElementById("passwordSignUp").value;
//   let uppercaseRegex = /[A-Z]/;
//   let lowercaseRegex = /[a-z]/;
//   let numberRegex = /\d/;
//   let symbolRegex = /(?=.*?[^\w\s])/;
//   if (!password) {
//     document.getElementById("passwordError").innerHTML =
//       "You should not leave the password empty";
//   } else if (symbolRegex.test(password)) {
//     document.getElementById("passwordError").innerHTML =
//       "Password must not contain special symbol!";
//   } else if (!uppercaseRegex.test(password)) {
//     document.getElementById("passwordError").innerHTML =
//       "Password needs at least 1 uppercase letter!";
//   } else if (!lowercaseRegex.test(password)) {
//     document.getElementById("passwordError").innerHTML =
//       "Password must contain at least 1 lowercase letter!";
//   } else if (!numberRegex.test(password)) {
//     document.getElementById("passwordError").innerHTML =
//       "Password must contain at least 1 number!";
//   } else {
//     document.getElementById("passwordError").innerHTML = "Password valid";
//     document.getElementById("passwordError").style.color = "lightgreen";
//     return true;
//   }
// };

// document.getElementById("buttonSignUp").addEventListener(
//   "click",
//   (saveToLocalStorage = () => {
//     let email = document.getElementById("emailSignUp").value;
//     let password = document.getElementById("passwordSignUp").value;
//     if (validateEmail() === true && validatePassword() === true) {
//       localStorage.setItem("email", emailSignUp);
//       localStorage.setItem("password", passwordSignUp);
//       alert("Signup Succesful!");
//       window.location.href = "./index.html";
//     } else {
//       return false;
//     }
//   })
// );

// OPTION 2

// document.getElementById("emailSignUp").addEventListener(
//   "input",
//   (validateEmailSignUp = () => {
//     let email = document.getElementById("emailSignUp").value;
//     let emailRegex =
//       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     if (!email) {
//       document.getElementById("emailError").innerHTML =
//         "You should not leave the email empty";
//     } else if (!emailRegex.test(email)) {
//       document.getElementById("emailError").innerHTML =
//         "Please type in the correct email address";
//     } else {
//       document.getElementById("emailError").innerHTML = "Email valid";
//       document.getElementById("emailError").style.color = "lightgreen";
//       return true;
//     }
//   })
// );

// document.getElementById("passwordSignUp").addEventListener(
//   "input",
//   (validatePasswordSignUp = () => {
//     let password = document.getElementById("passwordSignUp").value;
//     let uppercaseRegex = /[A-Z]/;
//     let lowercaseRegex = /[a-z]/;
//     let numberRegex = /\d/;
//     let symbolRegex = /(?=.*?[^\w\s])/;
//     if (!password) {
//       document.getElementById("passwordError").innerHTML =
//         "You should not leave the password empty";
//     } else if (symbolRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password must not contain special symbol!";
//     } else if (!uppercaseRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password needs at least 1 uppercase letter!";
//     } else if (!lowercaseRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password must contain at least 1 lowercase letter!";
//     } else if (!numberRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password must contain at least 1 number!";
//     } else {
//       document.getElementById("passwordError").innerHTML = "Password valid";
//       document.getElementById("passwordError").style.color = "lightgreen";
//       return true;
//     }
//   })
// );

// console.log(validatePasswordSignUp());

// document.getElementById("buttonSignUp").addEventListener(
//   "click",
//   (saveToLocalStorage = () => {
//     let email = document.getElementById("emailSignUp").value;
//     let password = document.getElementById("passwordSignUp").value;
//     validateEmailSignUp();
//     validatePasswordSignUp();

//     if (validateEmail() === true && validatePassword() === true) {
//       localStorage.setItem("email", emailSignUp);
//       localStorage.setItem("password", passwordSignUp);
//       alert("Signup Succesful!");
//       window.location.href = "./index.html";
//     } else {
//       document.getElementById("buttonSignUp").disabled = true;
//     }
//   })
// );

// OPTION 3
// document.querySelectorAll("#emailSignUp, #passwordSignUp").addEventListener(
//   "input",

//   (validateEmailSignUp = () => {
//     let email = document.getElementById("emailSignUp").value;
//     let emailRegex =
//       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if (!email) {
//       document.getElementById("emailError").innerHTML =
//         "You should not leave the email empty";
//     } else if (!emailRegex.test(email)) {
//       document.getElementById("emailError").innerHTML =
//         "Please type in the correct email address";
//     } else {
//       document.getElementById("emailError").innerHTML = "Email valid";
//       document.getElementById("emailError").style.color = "lightgreen";
//       return true;
//     }
//   }),
//   (validatePasswordSignUp = () => {
//     let password = document.getElementById("passwordSignUp").value;
//     let uppercaseRegex = /[A-Z]/;
//     let lowercaseRegex = /[a-z]/;
//     let numberRegex = /\d/;
//     let symbolRegex = /(?=.*?[^\w\s])/;
//     if (!password) {
//       document.getElementById("passwordError").innerHTML =
//         "You should not leave the password empty";
//     } else if (symbolRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password must not contain special symbol!";
//     } else if (!uppercaseRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password needs at least 1 uppercase letter!";
//     } else if (!lowercaseRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password must contain at least 1 lowercase letter!";
//     } else if (!numberRegex.test(password)) {
//       document.getElementById("passwordError").innerHTML =
//         "Password must contain at least 1 number!";
//     } else {
//       document.getElementById("passwordError").innerHTML = "Password valid";
//       document.getElementById("passwordError").style.color = "lightgreen";
//       return true;
//     }
//   })
// );

// OPTION 4
document.querySelectorAll("#buttonSignup").addEventListener(
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
