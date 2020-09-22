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


function welcomeUser() {
    var username = document.getElementById("username").value;
    if (username == "") {
        alert("Username must not be left empty");
        return false;
    }
    alert("Welcome back, " + username + "!");
}

function checkAdmin() {
    var adminUsername = document.getElementById("username");
    var adminPassword = document.getElementById("password");
    if (adminUsername.value == "admin" && adminPassword.value == "Admin123") {
        setTimeout(function() {window.location.href="admin.html"},0);
    } 
    welcomeUser();
    }



/*function changeMode() {

    let element = document.body;
    element.classList.toggle("dark-mode");
}*/



