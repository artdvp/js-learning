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
