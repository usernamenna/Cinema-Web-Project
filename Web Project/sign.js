//Sign up
var password = document.getElementById("password2"),
    confirmPassword = document.getElementById("password3");

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
/*
//Admin page
function checkAdmin() {
    var adminUsername = document.getElementById("username");
    var adminPassword = document.getElementById("password");
    var admin = false;
    if (adminUsername.value == "admin" && adminPassword.value == "Admin123") {
        admin = true;
        window.location.href = "admin.html";
    } else {
        admin = false;
    }
}*/


/*function changeMode() {

    let element = document.body;
    element.classList.toggle("dark-mode");
}*/


function welcomeUser() {
    var username = document.getElementById("username").value;
    if (username == "") {
        alert("Username must not be left empty");
        return false;
    }
    alert("Welcome back, " + username + "!");
}

