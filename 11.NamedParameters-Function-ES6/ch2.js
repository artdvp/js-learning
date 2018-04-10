/**
 * Exercise
 */
function sumAll(...num) {
  var total = 0;
  for (var i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4, 5, 6)); // 21
console.log(sumAll(1, 2, 3, 4, 5, 6, 7)); // 28

function power({ base = 1, power = 2 } = {}) {
  return Math.pow(base, power);
}

console.log(power(1)); // 1
console.log(power({})); // 1
console.log(power({ base: 3, power: 10 })); // 59049
