/**
 * Exercise
 */

const fn1 = a => a * 3;
function fn2(a) {
  return a / 5;
}

let fn3 = function(a, b) {
  return a + b;
};

console.log(fn3(fn1(fn1(2)), fn1(fn2(10))));
        //            6            2
        //       18            6
        //    24
