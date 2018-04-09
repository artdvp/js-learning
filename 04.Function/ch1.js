/**
 * Function #1: Declaration, Invocation
 */
// Delcaration
const add = function(a, b) {
  return a + b;
};

function add2(a, b, c) {
  return a + b + c;
}

function printSomething() {
  console.log("print");
}

// Invocation
printSomething();
console.log(add(1, 2));
let sum = add2(1, 2, 3);
console.log(sum);

/**
 * Function #2: ES6 Feature - Declaration
 */

// ES6 : Declaration, Arrows are a function shorthand (=>)
const add3 = (a, b) => {
  console.log("a+b=", a + b);
  return a + b;
};

const add1 = a => a + 1;

console.log(add3(1, 2)); // 3
console.log(add1(1)); // 2
console.log([1, 2, 3].map(add1)); // [2,3,4]
