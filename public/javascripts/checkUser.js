function validateUserName() {
  var name = document.getElementsById("username");
  if (name.value.length <= 5) {
    window.alert("Your username must be at least 5 characters!")
    return false;
  }
}

function validateEmail() {
  var inEmail = document.getElementById("email");
  if (inEmail.checkValidity() == false) { //Using HTML5's built in validity checker
    window.alert("This is not a valid e-mail address!");
  }
  else {
    return true;
  }
}

function validatePostcode() {
  var inPostcode = document.getElementById("postcode");

  if (inPostcode.value.length != 4) {
    window.alert("The postcode must have four numbers!");
    return false;
  }
  else if (inPostcode.value.search(/[0-9]{4}/) == -1) {
    window.alert("The postcode must contain only numbers!");
    return false;
  }
  else {
    return true;
  }
}

function validatePassword() {
  var inPassword = document.getElementById("pwd");

  }
  else if (inPassword.value.length < 8) {
    window.alert("Your password must be at least 8 characters in length!");
    return false;
  }
  else if (inPassword.value.search(/[0-9]/) == -1) {
    window.alert("Your password must contain a number!");
    return false;
  }
  else if (inPassword.value.search(/[a-zA-Z]/) == -1) {
    window.alert("Your password must contain a letter!");
    return false;
  }
  else {
    return true;
  }
}
