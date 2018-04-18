/**
 * Rest Parameters in JavaScript with ES6 / ES2015
 * from : https://alligator.io/js/rest-parameters-es6/
 */
function myFunc(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(`Argument ${i + 1}: ${rest[i]}`);
  }
}

myFunc("Paul", "John", "Ringo");
/*
Argument 1: Paul
Argument 2: John
Argument 3: Ringo
*/

// Destructuring
function myFunc2(...[name1, name2, name3]) {
  console.log(name1, name2, name3);
}

let names = ["Paul", "John", "Ringo"];

myFunc2(names);

//
