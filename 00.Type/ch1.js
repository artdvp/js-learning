/**
 * ref : https://kobkrit.com/react-native-tutorial-lecture-2-modern-javascript-programming-language-with-es6-es2015-98eefadf6b0d
 */
/**
 * Primitive Type #1: String, number and Boolean
 */
const myString = "myString";
console.log(myString + " is a myString");
console.log(typeof myString);

const number1 = 3;
const number2 = 3.33;
console.log(number2 - number1);
console.log(typeof number1);
console.log(typeof number2);

const boolean = true;
console.log(!boolean);
console.log(typeof boolean);

/**
 * Primitive Type #2: Null, Undefind and Reference by Value
 */

const empty = null;
let unknown;

console.log(unknown);
console.log(empty == unknown);
console.log(!!empty);
console.log(!!unknown);
console.log(typeof empty);
console.log(typeof unknown);

let number3 = number2;
number3 = 10;
console.log(number2, number3);
/**
 * Control Flow
 */

// in browser
 let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the quare root of " + theNumber * theNumber);
