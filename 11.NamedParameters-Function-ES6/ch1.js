/**
 * Function #8: ES6 Feature - Named Parameters
 */
// ES6: Named params
function rectArea({ width = 5, height = 5 } = {}) {
  return width * height;
}

console.log(rectArea()); // 25
console.log(rectArea({})); // 25
console.log(rectArea({ width: 3, height: 30 })); // 90
