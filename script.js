// Initialize Global Variables 
var generateBtn = document.querySelector("#generate")
var includeSpecialChar = '!@#$%^&*()_+~`|}{[];?><,./-=';
var includeUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var includeLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var includeNumeric = '0123456789'
var confirmLength = 0;
var userSelections = '';
var finalPassword = '';

// Utilize a 'while-Loop' so that user must enter valid value to proceed
function generatePassword () {
  
finalPassword = '';
confirmLength = 0;

while (confirmLength < 8 || confirmLength > 128 || confirmLength === ''){

// Utilize 'prompt' to evaluate password length and command user to enter valid value if neccessary
  confirmLength = prompt('How many characters would you like your password to be? Please select a number between 8-128. ');
    if (confirmLength < 8 || confirmLength > 128){
        confirmLength = prompt ('Please enter a value between 8 and 128.')
      }
      else if (Number.isNaN(parseInt(confirmLength)) || confirmLength === '') { 
        confirmLength = prompt('Please enter a valid number between 8 and 128')
      }
 }
// Utilize 'confirm' to begin generating password based on character selection        
      // Special Characters
      var confirmSpecial = confirm('Do you want to include special characters?');
        if (confirmSpecial === true){
          console.log('Include special characters');
          userSelections = userSelections + includeSpecialChar;
        }

      // UpperCase 
      var confirmUpperCase = confirm('Do you want to include upper-case characters?');
        if (confirmUpperCase === true){
          console.log('Include uppercase characters');
          userSelections = userSelections + includeUpperCase;
        }

      // LowerCase  
      var confirmLowerCase = confirm('Do you want to include lower-case characters?');
        if (confirmLowerCase === true){
          console.log('Include lowercase characters');
          userSelections = userSelections + includeLowerCase;
        }

      // Numbers  
      var confirmNumeric = confirm('Do you want to include numbers?');
        if (confirmNumeric=== true){
          console.log('Include numeric characters');
          userSelections = userSelections + includeNumeric;
        }
      
      console.log(userSelections, 'userInputSelection');


// Utilizing 'alert' to alert the user to include at least one character choice: special characters, upper/lower case or numbers 
        if (confirmSpecial === false && confirmUpperCase === false && confirmLowerCase === false && confirmNumeric === false) {
           console.log('No character type was selected');
           alert("Please select at least one character type");
        return;
  }
  
    // For loop that will create random password based on length and character type selection(s):
    for (let index = 0; index < confirmLength; index++) {
      var randomNum = Math.floor(Math.random()*userSelections.length);
      finalPassword = finalPassword + userSelections[randomNum]
    }

     console.log(finalPassword, 'final password')
     return finalPassword;
     
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
