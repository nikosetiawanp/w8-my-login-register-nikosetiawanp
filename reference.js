const getData = localStorage.getItem("data");
const data = JSON.parse(getData) || [
  { id: 1, email: "admin@gmail.com", password: "Admin123" },
];

function signup() {
  var name = document.getElementById("email");
  var password = document.getElementById("password");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  const check = data.find((a) => a.email === name.value);
  if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (check !== undefined) {
    alert("Email already registered");
  } else if (password.value.length > 8) {
    alert("Max of 8");
  } else if (!password.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!password.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!password.value.match(lowerCaseLetters)) {
    alert("please add 1 lowercase letter");
  } else if (check === undefined) {
    data.push({
      id: data[data.length - 1].id + 1,
      email: name.value,
      password: password.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "index.html";
  }
}

function sign() {
  var name = document.getElementById("email");
  var password = document.getElementById("password");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  const check = data.find(
    (a) => a.email === name.value && a.password === password.value
  );

  if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (check === undefined) {
    alert("Please email and password not registered");
  } else if (password.value.length > 8) {
    alert("Max of 8");
  } else if (!password.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!password.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!password.value.match(lowerCaseLetters)) {
    alert("please add 1 lowercase letter");
  } else if (check !== undefined) {
    localStorage.setItem("email", name.value);
    localStorage.setItem("password", password.value);
    window.location.href = "homepage.html";
  }
}
