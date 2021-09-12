  var stringLower = "abcdefghijklmnopqrstuvwxyz";
  var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordNumbers = '0123456789';
  var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";

function generatePassword() {
  debugger;
  var passLength = prompt('Enter a password length in numeric form, between 8 and 128!');
      while (passLength < 8 || passLength > 128) {
      //if (passLength < 8 || passLength > 128) {
        alert("ERROR: Password does not meet requirement. Minimum of 8 characters, max of 128. Please try again!");
        var passLength = prompt('Choose a password length with a minimum of 8 characters and a max of 128 characters!');
     //}
  };
  var addSpecialCharacters = confirm('Do you want special characters?');
  var addNumbers = confirm('Do you want to add numbers?');
  var addUpperCase = confirm('Do you want uppercase?');
  var i = 0;

  while(i != passLength) {
    if (addUpperCase === true) {
      var choice = Math.floor(Math.random() * 4);
    } else {
      var choice = Math.floor(Math.random() * 3);
    }

    if (choice == 0) {
      char1 = Math.floor(stringLower.length * Math.random());
      character = stringLower.charAt(char1);
    } 
    
    if (choice == 1) {
      if (addNumbers === true) {
        char2 = Math.floor(passwordNumbers.length * Math.random());
        character = passwordNumbers.charAt(char2);
      } else {
        char1 = Math.floor(stringLower.length * Math.random());
        character = stringLower.charAt(char1);
      }
    } 
    
    if (choice == 2) {
      if (addSpecialCharacters === true) {
        char3 = Math.floor(symbols.length * Math.random());
        character = symbols.charAt(char3);
      } else {
        char1 = Math.floor(string.length * Math.random());
        character = stringLower.charAt(char1);
      }
    }

    if (choice == 3) {
      char1 = Math.floor(stringUpper.length * Math.random());
      character = stringUpper.charAt(char1);
    } 
  
    password += character;
    i++;
    
  }

  //password=password.split('').sort(function(){return Math.floor(Math.random())}).join('');
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
