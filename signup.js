const getData = localStorage.getItem("data");
const data = JSON.parse(getData) || [
  { id: 1, email: "admin@gmail.com", password: "Admin123" },
];

// CHECK EMAIL
document.getElementById("email").addEventListener(
  "input",
  (validateEmailSignUp = () => {
    let email = document.getElementById("email").value;
    let emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email) {
      document.getElementById("emailError").innerHTML =
        "&#10060; You should not leave the email empty";
      document.getElementById("emailError").style.color = "red";

      return false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML =
        "&#10060; Please type in the correct email address";
      document.getElementById("emailError").style.color = "red";
      document.getElementById("buttonSignUp").disabled = true;

      return false;
    } else {
      document.getElementById("emailError").innerHTML = "&check; Email valid";
      document.getElementById("emailError").style.color = "lightgreen";
      document.getElementById("buttonSignUp").disabled = false;
      return true;
    }
  })
);

// CHECK PASSWORD
document.getElementById("password").addEventListener(
  "input",
  (validatePasswordSignUp = () => {
    let password = document.getElementById("password").value;
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let numberRegex = /\d/;
    let symbolRegex = /(?=.*?[^\w\s])/;
    if (!password) {
      document.getElementById("passwordError").innerHTML =
        "&#10060; You should not leave the password empty";
      document.getElementById("passwordError").style.color = "red";
      document.getElementById("buttonSignUp").disabled = true;

      return false;
    } else if (symbolRegex.test(password)) {
      document.getElementById("passwordError").innerHTML =
        "&#10060; Password must not contain special symbol!";
      document.getElementById("passwordError").style.color = "red";
      document.getElementById("buttonSignUp").disabled = true;

      return false;
    } else if (!uppercaseRegex.test(password)) {
      document.getElementById("passwordError").innerHTML =
        "&#10060; Password needs at least 1 uppercase letter!";
      document.getElementById("passwordError").style.color = "red";
      document.getElementById("buttonSignUp").disabled = true;

      return false;
    } else if (!lowercaseRegex.test(password)) {
      document.getElementById("passwordError").innerHTML =
        "&#10060; Password must contain at least 1 lowercase letter!";
      document.getElementById("passwordError").style.color = "red";
      document.getElementById("buttonSignUp").disabled = true;

      return false;
    } else if (!numberRegex.test(password)) {
      document.getElementById("passwordError").innerHTML =
        "&#10060; Password must contain at least 1 number!";
      document.getElementById("passwordError").style.color = "red";
      document.getElementById("buttonSignUp").disabled = true;

      return false;
    } else {
      document.getElementById("passwordError").innerHTML =
        "&check; Password valid";
      document.getElementById("passwordError").style.color = "lightgreen";
      document.getElementById("buttonSignUp").disabled = false;
      return true;
    }
  })
);

// PRESS ENTER TO SIGN UP
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonSignUp").click();
  }
});

// CREATE USER COLLECTION & ADMIN
let userCollection = JSON.parse(localStorage.getItem("users")) || [
  { email: "admin@gmail.com", password: "Admin123" },
];

// SAVE TO LOCAL STORAGE
document.getElementById("buttonSignUp").addEventListener(
  "click",
  (saveToLocalStorage = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = {
      email: email,
      password: password,
    };
    let check = data.find((a) => a.email === name.value);

    if (validateEmailSignUp() !== false && validatePasswordSignUp() !== false) {
      userCollection.push(user);
      localStorage.setItem("users", JSON.stringify(userCollection));
      window.location.href = "./index.html";
    } else if (!check) {
      alert("Email already registered");
      return;
    }
  })
);

// console.log(validatePasswordSignUp());
// let userAccounts = JSON.parse(localStorage.getItem("users")) || [];
// document.getElementById("buttonSignUp").addEventListener(
//   "click",
//   (saveToLocalStorage = (e) => {
//     e.preventDefault();
//     let user = {
//       email: email,
//       password: password,
//     };
//   })
// );
