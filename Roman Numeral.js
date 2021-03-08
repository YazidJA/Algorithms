/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
// roman numbers table
    let romans = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM", "MV", "V", "VM", "VMM", "VMMM", "X"],
      ];
// turns number into array
  let arr = num.toString().split(""); 
// inverts number
  let digiBack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    digiBack.push(arr[i]);
  }
// turns decimal number into inverted roman number
  let romBack = [];
  for (let j = 0; j < digiBack.length; j++) {
    romBack.push(romans[j][digiBack[j]]);
  }
// turns roman number into the correct order
  let final = [];
  for (let k = romBack.length - 1; k >= 0; k--) {
    final.push(romBack[k]);
  }
// joins roman array into final string
  return final.join("");
}


//Elegant solution
function convertToRoman2(num) {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var romanized = "";
  
    for (let i = 0; i<decimalValue.length; i++) {
      while (decimalValue[i] <= num) {
        romanized += romanNumeral[i];
        num -= decimalValue[i];
      }
    }
    return romanized;
  };
