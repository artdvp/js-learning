/**
 * Declaration #1 : Global Scope, Block Scope and Constant 
 */
const PI = 3.14;

const person = {};
person["a"] = 1;

if (true) {
  const a = 2;
  let b = 3;
  var c = 4;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
