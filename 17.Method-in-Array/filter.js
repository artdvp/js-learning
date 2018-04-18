/**
 * filter() Array Method in JavaScript
 * from : https://alligator.io/js/filter-array-method/
 */
let numbers = [1, 3, 6, 8, 11];

let luck = numbers.filter(function(number) {
  return number > 7;
});

console.log(luck);

// [8, 11]

/**
 * syntax

let newArray = array.filter(function(item) {
  return condition;
});

 */

// Filtering an array of objects

let heroes = [
  { name: "Batman", franchies: "DC" },
  { name: "Ironman", franchies: "Marvel" },
  { name: "Thor", franchies: "Marvel" },
  { name: "Superman", franchies: "DC" }
];

let marvelHeroes = heroes.filter(function(hero) {
  return hero.franchies == "Marvel";
});

console.log(marvelHeroes);
// [ { name: 'Ironman', franchies: 'Marvel' }, { name: 'Thor', franchies: 'Marvel' } ]