/**
 * Object #2. Assignment, Retrieval, Re-Assignment
 */
// Assignment
let obj = { b: 2 };
obj["c"] = 3;
console.log(obj);
// { b: 2, c: 3 }

// Retrieval
obj["c"];
obj.c;
const sum = obj["c"] + obj["b"];
console.log(sum);
// 5

// Re-Assignment
obj["c"] = sum;
obj.e = 4;
console.log(obj);
// { b: 2, c: 5, e: 4 }
