/*Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2". */

function palindrome(str) {
  // Turning everything to uppercase to ignore the case
  let upper = str.toUpperCase();
  // All letters and digits to forward array
  let forward = upper.match(/[a-z0-9]/gi);
  // Reverse string to backward array
  let backward = [];
  for (let i = forward.length - 1; i >= 0; i--) {
    backward.push(forward[i]);
  }
  // Comparing forward and backward
  for (let j = 0; j < forward.length; j++) {
    if (forward[j] != backward[j]) {
      return false;
    }
  }
  return true;
}
