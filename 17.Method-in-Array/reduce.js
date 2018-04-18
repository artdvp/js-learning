/**
 * reduce() Array Method in JavaScript
 * from : https://alligator.io/js/reduce-array-method/
 */
let pokemon = ["squirtle", "charmander", "bulbasaur"];

let pokeLength = pokemon.reduce(function(previous, current) {
  return previous + current.length;
}, 0);

console.log(pokeLength);
// 27

/** syntax
 
array.reduce(function(previousValue, currentValue, currentIndex, array) {
    // do stuff
    return newPreviousValue;
}, initialValue)

 */