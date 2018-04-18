/**
 * Arrow Functions in JavaScript
 * from : https://alligator.io/js/arrow-functions/
 */
// No parameter
let myFunc = () => {
  // Do stuff
};

// With parameters
let myFunc1 = (a, b) => {
  return a * b;
};

// Only 1 param, no need for parens
let myFunc2 = a => {
  return a * a;
};

// Wrap body in parens to return
// object literal
let myFunc3 = (first, last) => ({ firstName: first, lastName: last });
