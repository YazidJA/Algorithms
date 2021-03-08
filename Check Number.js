/*Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false. */

function telephoneCheck(str) {
  let regex = /[0-9()-\s]/gi; // checks for accepted characters
  let parExists = /[()]/gi; // checks for parenthesis
  let parPosition = /\(\d{3}\)/gi; //checks for parenthesis position

  // checks for accepted characters
  if (str.match(regex).length < str.length) {
    return false;
  }
  //checks for parenthesis position if there are any
  else if (str.match(parExists) && parPosition.test(str) == false) {
    return false;
  }
  //check if the first digit is 1 when there are 11 digits
  else if (str.match(/\d/gi).length == 11) {
    return str.match(/^1/) == 1;
  }
  //check if there are 10 digits
  else return str.match(/\d/gi).length == 10;
}

telephoneCheck("1 (555) 555-5555");
