// Created by P.M.J.I.Karunarathna IT20235192

function back() 
{
  window.history.go(-1);
}

function myFunction1() 
{
  var x = document.getElementById("psw");
  if (x.type === "password") 
  {
    x.type = "text";
  } 
  else 
  {
    x.type = "password";
  }
}

function myFunction2() 
{
  var x = document.getElementById("rpsw");
  if (x.type === "password") 
  {
    x.type = "text";
  } else 
  {
    x.type = "password";
  }
}

function validate()
{
  var password = document.getElementById("psw").value;
  var confirmpassword = document.getElementById("rpsw").value;
  if (password != confirmpassword)
  {
     alert("Password not matched");
     return false;
  }
}