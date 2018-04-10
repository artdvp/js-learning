/**
 * Function #7: ES6 Feature - Rest Params (Spreads ...), Default Params
 */

/// ES6: Rest Params (Spreads ... parameters)
function concatenateAll(...args) {
  console.log(args[0], args[1]); // hey I
  console.log(args); // [ 'Hey', 'I', 'kinda', 'miss', 'you' ]
  console.log(args.length); // 5
  return args.join("");
}

console.log(concatenateAll("Hey", "I", "kinda", "miss", "you"));
// HeyIkindamissyou

function addWithDefaults(a = 0, b = 0) {
  return a + b;
}

console.log(addWithDefaults());
// 0