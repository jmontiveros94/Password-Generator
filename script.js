// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked the button!");
var lowercase = confirm("Do you want to include lowercase characters?");
var uppercase = confirm("Do you want to include uppercase characters?");
var numeric = confirm("Do you want to include numeric characters?");
var special = confirm("Do you want to include special characters?");

  // Prompt the User for the password criteria
  //1. password length at least 8 characters
  var passwordCriteria = prompt("How long do you want your password to be?");
  console.log(passwordCriteria.length)
  var passwordLength = parseInt(passwordCriteria)
  if (passwordCriteria.length < 8) {
    alert("Password must be at least 8 characters long.");
  }
  else {
    alert("Password criteria: " + passwordCriteria);

    //2. password length less than 128 characters
    if (passwordCriteria.length > 128) {
      alert("Password must be less than 128 characters long.");
    }
    else {
      alert("Password criteria: " + passwordCriteria);
    }
  }

  //3. password prompts user to include lowercase, uppercase, numeric, and/or special characters
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one criteria must be selected.");
  }
  else {
    alert("Selected criteria:\nLowercase: " + lowercase + "\nUppercase: " + uppercase + "\nNumeric: " + numeric + "\nSpecial: " + special);
  } if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one criteria must be selected.");
  } else {
    var passwordCriteria = "";

    //4. Validates characters
    if (lowercase) {
      passwordCriteria += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercase) {
      passwordCriteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numeric) {
      passwordCriteria += "0123456789";
    }

    if (special) {
      passwordCriteria += "!@#$%^&*()";
    }

    var password = prompt("Please enter a password using the following criteria:\n" + passwordCriteria);

    //5. Validate the entered password against the selected criteria
    var isValid = true;

    if (lowercase && !/[a-z]/.test(password)) {
      isValid = false;
    }

    if (uppercase && !/[A-Z]/.test(password)) {
      isValid = false;
    }

    if (numeric && !/[0-9]/.test(password)) {
      isValid = false;
    }

    if (special && !/[!@#$%^&*()]/.test(password)) {
      isValid = false;
    }

    if (!isValid) {
      alert("Password does not meet the selected criteria.");
    } else {
      alert("Password is valid.");
    }
  }
  return "Generated password goes here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
