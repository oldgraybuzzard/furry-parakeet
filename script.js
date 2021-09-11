
function generatePassword() {
  var length = prompt('Choose a password length with a minimu, of 8 characters and a max of 128 characters!');
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var passwordNumbers = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while( password.length<length ) {
      entity1 = Math.ceil(string.length * Math.random()*Math.random());
      entity2 = Math.ceil(passwordNumbers.length * Math.random()*Math.random());
      entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
      hold = string.charAt( entity1 );
      hold = (password.length%0==0)?(hold.toUpperCase()):(hold);
      character += hold;
      character += passwordNumbers.charAt( entity2 );
      character += punctuation.charAt( entity3 );
      password = character;
  }
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password.substr(0);
}




// function generatePassword(passwordLength) {
//     var passwordLength = prompt('Password Length?');
//     var passwordSpecialCharacters = confirm('Do you want special characters?');
//     var passwordNumbers = confirm('Do you want to add numbers?');
//     var createdPassword = "";
   
// var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var numbers = "1234567890";
// var symbols = "!@#$%^&*()";
// var allTogether = letters + numbers + symbols;
// var randomArray = Array(passwordLength);
//   randomPasswordArray[0] = numbers;
//   randomPasswordArray[1] = letters;
//   randomPasswordArray[2] = symbols;
//   randomPasswordArray = randomPasswordArray.fill(allTogether, 3);
//   return shuffleArray(randomPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
// }

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }
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
