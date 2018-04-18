/**
 * map() Array Method in JavaScript
 * from : https://alligator.io/js/map-array-method/
 */

let drinks = ["coffee soda", "tea", "whiskey"];

let coldDrinks = drinks.map(function(drink) {
  return "iced " + drink;
});


console.log(coldDrinks);
// [ 'iced coffee soda', 'iced tea', 'iced whiskey' ]

// simple 
// let newArray = myArray.map(function)