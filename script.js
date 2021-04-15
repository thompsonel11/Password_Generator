// Initialize Variables 
var generateBtn = document.querySelector("#generate")
var includeSpecialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '/', '?', ']', ' ', '{', '}', '|', '`', '~', '=', '+', ';', ':']
var includeUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var includeLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var includeNumeric = ['0','1','2','3','4','5','6','7','8','9']
var confirmLength = 0;
var userSelections = [];
var finalPassword = [];

// Utilize a 'while-Loop' so that user must enter valid value to proceed
function generatePassword () {
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
// Utilize 'confirm' and 'push' to begin generating password based on character selection        
      // Special Characters
      var confirmSpecial = confirm('Do you want to include special characters?');
        if (confirmSpecial === true){
          console.log('Include special characters');
          userSelections.push(includeSpecialChar);
        }

      // UpperCase 
      var confirmUpperCase = confirm('Do you want to include upper-case characters?');
        if (confirmUpperCase === true){
          console.log('Include uppercase characters');
          userSelections.push(includeUpperCase);
        }

      // LowerCase  
      var confirmLowerCase = confirm('Do you want to include lower-case characters?');
        if (confirmLowerCase === true){
          console.log('Include lowercase characters');
          userSelections.push(includeLowerCase);
        }

      // Numbers  
      var confirmNumeric = confirm('Do you want to include numbers?');
        if (confirmNumeric=== true){
          console.log('Include numeric characters'); 
          userSelections.push(includeNumeric);
        }
      
      console.log(userSelections, 'userInputSelection');


// Utilizing 'alert' to alert the user to include at least one character choice: special characters, upper/lower case or numbers 
        if (confirmSpecial === false && confirmUppercase === false && confirmLowercase === false && confirmNumeric === false) {
           console.log('No character type was selected');
           alert("Please select at least one character type");
        return;
  }
  
    // For loop that will create random password based on length and character type selection(s):

  // var index = Math.floor(Math.random() * confirmLength.length);
  // var userSelections = confirmLength[index];

    for (var i = 0, n=userSelections.length; i<parseInt(confirmLength); i++) {
         var finalPassword = userSelections[Math.floor(Math.random() * n)];
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
