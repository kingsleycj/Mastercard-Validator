// A program to validate MASTERCARD card numbers only

/* A MASTERCARD card must contain 16 characters, the number must start with either a 2-digit number range(ranging from 51-55) 
or a 4 digit number range(ranging from 2221 to 2720).

If the string starts with a 2-digit number range (ranging from 51 to 55), the next 14 digits must be a number between 0 to 9. 
And If the string starts with a 4-digit number range (ranging from 2221 to 2720), the next 12 digits must be a number between 0 to 9.
*/
const mastercardAuth = new RegExp(
    /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/
  );

const validate = (cardNumber) => {
  // to test for an empty card number
  if (cardNumber === null) {
    return "Invalid Card. Check your card and try again";
  }
  // Test for MASTERCARD
 if (mastercardAuth.test(cardNumber) == true) {
    return "Your MASTERCARD number has been validated successfully";
  } else {
    return "Invalid Card. Check your card and try again";
  }
};

// Tests: 
const mastercardTest = "5199110748069769";
console.log(validate(mastercardTest)); // Your MASTERCARD number has been validated successfully
const anotherTest = "445355322511";
console.log(validate(emptyTest)); // Invalid Card. Check your card and try again

