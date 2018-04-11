/**
 * ref: https://kobkrit.com/react-native-tutorial-lecture-2-modern-javascript-programming-language-with-es6-es2015-98eefadf6b0d
 */
const number1 = 5;
const number2 = 10.0;
console.log(number2 - number1);
console.log(typeof number1);

console.log(null == undefined);
console.log(!!true);
console.log(!!!true);
console.log(!!!1);
console.log(!!undefined);

const person = {
  name: "Nick"
};

person.name = "John";
console.log(person.name);
//person = "Sandra"

const person2 = [];
person2.push("John");
console.log(person2[0]);
//person = ['Nick']
