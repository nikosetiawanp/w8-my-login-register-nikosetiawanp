// const getLocalStorage = localStorage.getItem("email");
// if (getLocalStorage !== null) {
//   const collection = document.getElementsByClassName("name-data");
//   collection[0].innerHTML = `Hello ${getLocalStorage}!`;
// }
// PRESS ENTER TO SUBMIT
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonAddData").click();
  }
});

// DATA DUMMY
let data = [
  { name: "John", age: 25, email: "john@example.com" },
  { name: "Jane", age: 30, email: "jane@example.com" },
  { name: "Bob", age: 35, email: "bob@example.com" },
];

// VALIDATE NAME
document.getElementById("name").addEventListener(
  "input",
  (checkIfString = () => {
    let nameInput = document.getElementById("name").value;
    let nameRegex = /[A-Za-z]/;
    if (!nameInput || !nameRegex.test(nameInput)) {
      document.getElementById("name").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("name").style.borderColor = "white";
      document.getElementById("name").style.color = "white";
      return true;
    }
  })
);
// VALIDATE AGE
document.getElementById("age").addEventListener(
  "input",
  (checkIfNumber = () => {
    let ageInput = document.getElementById("age").value;
    if (isNaN(ageInput)) {
      document.getElementById("age").style.borderColor = "red";
      return false;
    } else if (ageInput <= 0 || ageInput > 200) {
      return false;
      document.getElementById("age").style.borderColor = "red";
    } else {
      document.getElementById("age").style.borderColor = "white";
      return true;
    }
  })
);
// VALIDATE EMAIL
document.getElementById("email").addEventListener(
  "input",
  (validateEmail = () => {
    let email = document.getElementById("email").value;
    let emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("email").style.borderColor = "white";
      return true;
    }
  })
);
// ADD DATA TO TABLE
showData = () => {
  let tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = "<tr>";
    row += "<td>" + data[i].name + "</td>";
    row += "<td>" + data[i].age + "</td>";
    row += "<td>" + data[i].email + "</td>";
    row +=
      "<td>" +
      "<button class='edit' id='edit' type='button' onclick='editData(" +
      i +
      ")'>Edit</button>" +
      "<button class='delete' id='delete' type='button' onclick='deleteData(" +
      i +
      ")'>Delete</button>" +
      "</td>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
};

// ADD DATA TO OBJECT DATA

// EDIT DATA IN THE OBJECT DATA
editData = () => {
  let nameInput = document.getElementById("name").value;
  let ageInput = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  data[index] = { name: nameInput, age: ageInput, email: email };
  showData();
};

// DELETE OBJECT FROM OBJECT DATA
deleteData = (index) => {
  data.splice(index, 1);
  showData();
};

// SHOW DATA WHEN PAGE LOADED
window.onload = function () {
  showData();
};

// CLICK ADD TO ADD DATA
document.getElementById("buttonAddData").addEventListener(
  "click",
  (addData = () => {
    let nameInput = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    if (
      checkIfString() !== false &&
      checkIfNumber() !== false &&
      validateEmail() !== false
    )
      data.push({ name: nameInput, age: ageInput, email: email });
    showData();
  })
);
