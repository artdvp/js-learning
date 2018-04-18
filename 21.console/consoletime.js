/**
 * console.time() & console.timeEnd() in JavaScript
 * from : https://alligator.io/js/console-time-timeend/
 */
console.time("Time this a");

let k = 0;
for (let i = 0; i < 10000; i++) {
  // stuff
  k += i;
}
console.log(k);

console.timeEnd("Time this a");
