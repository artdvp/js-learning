/**
 * Style Guide #1 Use function declarations instead of function expressions
 */

// good
function foo() {
  return 0;
}

/**
 * Style Guide #2 Wrap immediately invoke function expressions in parentheses
 */
// good
(function() {
  console.log("Welcome to the JS");
})();

/**
 * Style Guide #3 Never declare a function in a non-function block(if while etc)
 */
// good
let currentUser = true;
let test;
if (currentUser) {
  test = () => {
    console.log("Yup.");
  };
  test();
}

/**
 * Style Guide #4 Never use arguments, use ... instead.
 */
// good
function concatenateAll(...args) {
  return args.join(",");
}

console.log(concatenateAll("1", "2", "3")); // 1,2,3

/**
 * Style Guide #5. Use parameter syntax rather than mutating function arguments
 */
// good
function handleThings(opts = {}) {
  return opts;
}

console.log(handleThings()); // {}

/**
 * Style Guide #6. Avoid side effects with default parameters
 */
var b = 1;
//bad
function count(a = b++) {
  console.log(a);
}
count(); // 1
count(3); // 3
count(); // 2

/**
 * Style Guide #7. Always put default parameters last
 */
// good
function handleThings2(name, opts = {}) {
  return 0;
}

/**
 * Style Guide #8. Use spread operator ... to call variadic function
 */

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);
// 1 2 3 4 5

// good
console.log(new Date(...[2016, 08, 05]));
// 2016-09-04T17:00:00.000Z

/**
 * Style Guide #9. Use Arrow functions when passing an anonymouse function
 */
// good
console.log(
  [1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
  })
);
// [ 2, 6, 12 ]

/**
 * Style Guide #10. Omit braces and use the implicit return, if the function body consists of a single expressions.
 */
// bad
console.log(
  [1, 2, 3].map(number => {
    const nextnumber = number + 1;
    `A string containing the ${nextnumber}..`;
  })
);

// good
console.log([1, 2, 3].map(number => `A string containing the ${number}.`));

// good
console.log(
  [1, 2, 3].map(number => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}`;
  })
);

// good
console.log(
  [1, 2, 3].map((number, index) => ({
    index: number
  }))
);
