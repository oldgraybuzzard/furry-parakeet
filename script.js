
function generatePassword() {
  var length = prompt('Enter a password length in numeric form, between 8 and 128!');
      while (length < 8 || length > 128) {
      if (length < 8 || length > 128) {
        alert("ERROR: Password does not meet requirement. Minimum of 8 characters, max of 128. Please try again!");
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
  while(password.length<length) {
      char1 = Math.floor(string.length * Math.random()*Math.random());
      char2 = Math.floor(passwordNumbers.length * Math.random()*Math.random());
      char3 = Math.floor(symbols.length * Math.random()*Math.random());
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
  password=password.split('').sort(function(){return Math.random()}).join('');
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
