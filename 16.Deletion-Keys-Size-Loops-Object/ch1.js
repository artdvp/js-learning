/**
 * Object #3. Deletion, Keys, Size, Loops
 */
// Deletion
let obj = { b: 2, c: 3, d: 4, e: 5 };
delete obj.c;
console.log(obj);
// { b: 2, d: 4, e: 5 }

// Getting array of keys
console.log(Object.keys(obj));
// ["b", "d", "e"];

//Getting size
console.log(Object.keys(obj).length);
// 3

// Loops
for (let i in obj) {
  console.log(i, obj[i]);
}
/*
b 2
d 4
e 5
*/