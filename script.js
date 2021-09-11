

function generatePassword(passwordLength) {
    var passwordLength = prompt('Password Length?');
    var passwordSpecialCharacters = confirm('Do you want special characters?');
    var passwordNumbers = confirm('Do you want to add numbers?');
    var createdPassword = "";
   
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()";
var allTogether = letters + numbers + symbols;
var randomArray = Array(passwordLength);
  randomPasswordArray[0] = numbers;
  randomPasswordArray[1] = letters;
  randomPasswordArray[2] = symbols;
  randomPasswordArray = randomPasswordArray.fill(allTogether, 3);
  return shuffleArray(randomPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
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
