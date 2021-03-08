/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) {
  //regex to look for letters only
  let regex = /[a-z]/gi;
  // turn string into an array
  let arr = str.split("");

  let code = [];
  for (let i = 0; i < arr.length; i++) {
    //check if the string is a letter
    if (arr[i].match(regex)) {
      //if it's a letter and the ASCII code is less than 78, add 13
      if (arr[i].charCodeAt(0) < 78) {
        code.push(arr[i].charCodeAt(0) + 13);
        //if it's a letter and the ASCII code is more than 78, remove 13
      } else {
        code.push(arr[i].charCodeAt(0) - 13);
      }
      //if it's not a letter keep the same code
    } else {
      code.push(arr[i].charCodeAt(0));
    }
  }
  // turn the array of codes to a string of letters
  return code.map((x) => String.fromCharCode(x)).join("");
}