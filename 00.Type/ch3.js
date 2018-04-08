/**
 * ref: https://kobkrit.com/react-native-tutorial-lecture-2-modern-javascript-programming-language-with-es6-es2015-98eefadf6b0d
 */
/**
 * Complex Type #1: Object & Array
 */

// Object
const myObject = { a: 1, b: 2 };
console.log(myObject["a"]);
console.log(myObject);
console.log(typeof myObject);

// Array
const myArray = [1, 2];
console.log(myArray[0]);
console.log(myArray);
console.log(typeof myArray);

/**
 * Complex Type #2: Function and Pass by Reference
 */

// Function
const myFunction = function() {
  console.log(myFun);
};

console.log(myFunction);
console.log(typeof myFunction);

// Pass by Reference
const myArray2 = myArray;
myArray2[0] = 9;
console.log(myArray[0], myArray2[0]);
