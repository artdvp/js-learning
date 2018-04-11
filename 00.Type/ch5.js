let arr = [];

console.log(typeof `${Object}`.prototype);
// undefined

console.log(true ? 1 : 2);
// 1

console.log(false ? 1 : 2);
// 2

/**
 * Automatic type conversion
 */
console.log(8 * null);
// 0

console.log("5" - 1);
// 4

console.log("5" + 1);
// 51

console.log("five" * 2);
// NaN

console.log(false == 0);
// true