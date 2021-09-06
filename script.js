// Assignment code here
var passwordLength = window.prompt('Password Length?');
console.log('Password length = ' + passwordLength);
var passwordSpecialCharacters = window.confirm('Do you want special characters?');
console.log("Special Characters = " + passwordSpecialCharacters);
var passwordNumbers = window.confirm('Do you want to add numbers?');
console.log('Use numbers = ' + passwordNumbers);

let specialCharacters = [
  '!', '@', '#', ')', '(', '*', '&', '~', '-', '+', '.', '_', '{', '|', '?', ']', '[', '%', ';', '"'
];

//Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = specialCharacters;
  return symbols[Math.floor(Math.random() * symbols.length)];
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
