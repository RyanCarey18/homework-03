// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
let characters = "";

function password(length) {
  let pw = "";

  let pwlength = characters.length;

  for (let i = 0; i < length; i++) {
    pw += characters.charAt(Math.floor(Math.random() * pwlength));
  }
  return pw;
}
// Write password to the #password input
function writePassword() {

  characters = ""

  const length = prompt("Please enter desired length of password (8-128) characters)");
  if (length < 8 || length > 128) {
    alert("Your password must be between 8-128 characters.");
    return writePassword();
   };
  let upper = confirm("Would you like UPPERCASE characters (ABC) included?");

  let lower = confirm("Would you like lowercase characters (abc) included?");

  let number = confirm("Would you like numbers (123) included?");

  let symbol = confirm("Would you like symbols (!@#) included?");

  if (upper) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lower) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (symbol) {
    characters += "!@#$%^&*()_+=-";
  }
  if (number) {
    characters += "0123456789";
  }
  if (!upper && !lower && !symbol && !number) {
    console.log("no characters provided")
    return alert("You must select one type of characters.")
  }
  

  passwordText.value = password(length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
