/**
 * ref: https://kobkrit.com/react-native-tutorial-lecture-2-modern-javascript-programming-language-with-es6-es2015-98eefadf6b0d
 */
const myObject = { a: 1, b: 2 };
console.log(myObject["a"]);
console.log(myObject["b"]);
console.log(myObject);

const myObject2 = myObject;
myObject["a"] = 999;
console.log(myObject["a"], myObject2["a"]); // 999 999
