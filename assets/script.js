// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
let characters = "";

function password(length) {
  var result = "";

  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(password(length));

// Write password to the #password input
function writePassword() {

  characters = ""

  const length = prompt("Please enter desired length of password (8-128) characters)");
  if (length < 8 || length > 128) {
    return alert("Your password must be between 8-128 characters.")
   }
  let upper = confirm("Would you like UPPERCASE characters (ABC) included?");

  let lower = confirm("Would you like lowercase characters (abc) included?");

  let number = confirm("Would you like numbers (123) included?");

  let symbol = confirm("Would you like symbols (!@#) included?");

  if (upper) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(characters);
  }

  if (lower) {
    characters += "abcdefghijklmnopqrstuvwxyz";
    console.log(characters);
  }
  if (symbol) {
    characters += "!@#$%^&*()_+=-";
    console.log(characters);
  }
  if (number) {
    characters += "0123456789";
    console.log(characters);
  }
  if (!upper && !lower && !symbol && !number) {
    console.log("no characters provided")
    return alert("You must select one type of characters.")
  }
  

  passwordText.value = password(length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
