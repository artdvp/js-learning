/**
 * Generator Functions in JavaScript with ES6 / ES2015
 * from : https://alligator.io/js/generator-functions-es6/
 */
function* someGenerator() {
  yield "Cat";
  yield "Dogs";
  yield "Birds";
}

const gen = someGenerator();

console.log(gen.next().value); // Cat
console.log(gen.next().value); // Dogs
console.log(gen.next().value); // Birds
console.log(gen.next().value); // undefined

const gen2 = someGenerator();

console.log(gen2.next().done); // false
console.log(gen2.next().done); // false
console.log(gen2.next().done); // false
console.log(gen2.next().done); // true

// ID Generator

function* idGen() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const myIdGen = idGen();

console.log(myIdGen.next().value); // 1
console.log(myIdGen.next().value); // 2
console.log(myIdGen.next().value); // 3
console.log(myIdGen.next().value); // 4
console.log(myIdGen.next().value); // 5
