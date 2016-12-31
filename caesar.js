// File name: caesar.js
// Date: 12/17/2016
// Programmer: Jim Medlock
//
// New Year's Challenge 2017 - Coding Scavenger Hunt
// Decipher a Caesar cipher

const cipher = "LVURNSZYXMAQ".split("");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const maxPosition = alphabet.length - 1;
const vowels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Decypt all variations assuming that the second letter in the cipher
// is a vowel

let rotationAmt = 0;

vowels.forEach((vowel, index, array) => {
   const rotationAmt = calcRotationAmount(vowel, alphabet, cipher[0]);
   let decipheredText = cipher.map(decipher);
   console.log("Vowel=", vowel," rotation amt.=", rotationAmt,
      " deciphered text=", decipheredText.toString().replace("/,/g",""));
});

// Calculate the rotation amount for a substitution characer given an alphabet
// and a starting character within it.
//
// Returns: Rotation amount or null if the substitution and starting characters
//          are the same. The rotation is always to the right, which means that
//          the rotation amount returned will is always a positive number.
function calcRotationAmount(substitutionChar, alphabet, startingChar) {

   if (substitutionChar === startingChar) {
      return null;
   }

   startingPos = alphabet.indexOf(startingChar);
   substitutionPos = alphabet.indexOf(substitutionChar);
   if (substitutionPos <  startingPos) {
      rotationAmt = maxPosition - startingPos + substitutionPos + 1;
   } else {
      rotationAmt = substitutionPos - startingPos - 1;
   }

   return rotationAmt;
}

// Decipher the provided letter by rotating it in the alphabet by the rotation
// amount.
//
// Returns: Deciphered text string with the deciphered letter appended to it.
function decipher(letter, index, cipher) {
   letterPos = alphabet.indexOf(letter) + rotationAmt;
   if (letterPos > maxPosition) {
      letterPos = letterPos - maxPosition - 1;
   }
   return alphabet[letterPos];
}
