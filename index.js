


// PRESS ENTER TO SIGN UP
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("buttonSignUp").click();
    }
  });

// SIGNUP

// CHECK EMAIL

// CHECK PASSWORD
document
.getElementById("buttonSignUp")
.addEventListener("click",
    checkPassword = () => {
        const passwordSignUp = document.getElementById("passwordSignUp").value;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/g;
        const symbolRegex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

        if (!uppercaseRegex.test(passwordSignUp)) {
        document.getElementById("notification").innerHTML = "Need at least 1 uppercase letter!";
            // alert("Need at least 1 uppercase letter")
        } else if (!lowercaseRegex.test(passwordSignUp)){
            document.getElementById("notification").innerHTML = "Password must contain at least 1 lowercase letter!";
        } else if (!numberRegex.test(passwordSignUp)) {
            document.getElementById("notification").innerHTML = "Password must contain at least 1 number!";
        } else if (symbolRegex.test(passwordSignUp)){
            document.getElementById("notification").innerHTML = "Password must contain at least 1 number!";
        } else {
            alert("correct")
            document.getElementById("notification").innerHTML = "";
        }
    }
)