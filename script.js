// Assignment Code
var generateBtn = document.querySelector("#generate");


// User Selection Confirmation - begin password generation
function generatePassword () {

// Evaluate Password Length
  var confirmLength = confirm('How many characters would you like your password to be? Please select a number between 8-128. ');
    if confirmLength < 8 || confirmLength > 128 || confirmLength = null
        alert ('Please enter a value between 8 and 128.')
              

// Special Characters
  var confirmSpecial = confirm('Do you want to include special characters?');
    if (confirmSpecial === true){
    console.log('Include special characters')
    includeSpecialChar = '!@#$%^&*()_+~`|}{[];?><,./-='
    }
    else {
    includeSpecialChar = ''
    }
// UpperCase 
  var confirmUpperCase = confirm('Do you want to include upper-case characters?');
    if (confirmUppercase === true){
     console.log('Include Uppercase characters') 
     includeUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    else {
      console.log('Did NOT include Uppercase characters') 
      includeUpperCase = ''
    }
// LowerCase  
  var confirmLowerCaseconfirm = confirm('Do you want to include lower-case characters?');
    if (confirmLowercase === true){
      console.log('Include Lowercase characters') 
      includeLowerCase = 'abcdefghijklmnopqrstuvwxyz'
    }
    else {
      console.log('Did NOT nclude Lowercase characters') 
      includeLowerCase = ''  
    }

// Numbers  
  var confirmNumeric = confirm('Do you want to include numbers?')
    if (confirmNumeric=== true){
      console.log('Include numeric characters') 
      includeNumeric = '0123456789'
    }
    else {
      console.log('Did NOT include numeric characters')  
      includeNumeric = ''
    }

// If user didn't select special characters, upper/lower case or numbers 
    if (confirmSpecial && confirmUppercase && confirmLowercase && confirmNumeric) === false {
      console.log('No character type was selected')
      alert("Please select at least one character type")
      return;}


  
  
  passwordLength ();
  includeSpecialChar ();
  includeUpper ();
  includeLower ();
  includeNumeric ();
  
return 'yourpassword';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
