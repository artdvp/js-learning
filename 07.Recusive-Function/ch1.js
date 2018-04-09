/**
 * Function #4: Recusive
 */

// Recusive
const fibonacci = a => {
  if (a < 1) return 1;
  console.log(a);
  return fibonacci(a - 2) + fibonacci(a - 1);
};

console.log(fibonacci(5));
