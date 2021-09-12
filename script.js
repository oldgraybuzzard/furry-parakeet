
function generatePassword() {
  var length = prompt('Choose a password length with a minimum of 8 characters and a max of 128 characters!');
      while (length < 8) {
      if (length < 8) {
        alert("ERROR: Password length must exceed 8 characters. Please enter a higher higher then 8!");
        var length = prompt('Choose a password length with a minimum of 8 characters and a max of 128 characters!');
     }
  };
  var addSpecialCharacters = confirm('Do you want special characters?');
  var addNumbers = confirm('Do you want to add numbers?');
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var passwordNumbers = '0123456789';
  var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while( password.length<length ) {
      char1 = Math.ceil(string.length * Math.random()*Math.random());
      char2 = Math.ceil(passwordNumbers.length * Math.random()*Math.random());
      char3 = Math.ceil(symbols.length * Math.random()*Math.random());
      hold = string.charAt(char1);
      hold = (password.length%0==0)?(hold.toUpperCase()):(hold);
      character += hold;
      if (addNumbers === true) {
          character += passwordNumbers.charAt(char2);
      };
      if (addSpecialCharacters === true) {
         character += symbols.charAt(char3);
      };
      password = character;
  }
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password.substr(0);
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
