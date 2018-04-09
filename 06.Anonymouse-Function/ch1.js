/**
 * Function #3: Anonymouse Function
 */

// Anonymouse Function: A function has no name
setTimeout(function() {
  console.log("10 ms passed.");
}, 10);

setTimeout(() => {
  console.log("100 ms passed.");
}, 100);

console.log("Hey!");
// Encapsulate with anonymouse function
(function() {
  console.log("Hey!!");
})();

// Encapsulate with anonymouse function shorthand
(() => {
  console.log("Hey!!!");
})();
