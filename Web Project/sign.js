//Sign up
var password = document.getElementById("password2")
, confirm_password = document.getElementById("password3");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

//Admin page
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function checkAdmin()
{
  var adminUsername= document.getElementById("username");
  var adminPassword= document.getElementById("password");
  var admin=false;
  if(adminUsername.value=="admin" && adminPassword.value=="Admin123")
  {
    admin=true;
    window.location.href="admin.html";
  }
  else {
    admin=false;
  }
}


function changeMode() 
{

  let element = document.body;
  element.classList.toggle("dark-mode");
}

function welcomeUser()
{
  var username=document.getElementById("username").value;
  alert("Welcome back, "+username + "!");
  window.location.href = 'index.html';
  logged = true;
  sessionStorage.setItem("logged", true);
  var x = document.querySelectorAll(".log");
  for(let i = 0;i < x.length; i++){
      x[i].value = "Log Out";
  }
}
var logged = false;
sessionStorage.setItem("logged",false);
function sign()
{
    var islogged = sessionStorage.getItem("logged");
    logged = !
    sessionStorage.setItem("logged", logged);
}
function change_btn()
{
    var text;
    if(logged){
        text="Log Out"
    }
    else
    {
        text="Log in"
    }

}
change_btn();