/**
 * Object #1 : Declaration, Reference
 */
// Declaration
let obj = { key: 2, "some-thing": 3 };
const obj1 = {};
const obj2 = {
  a: 1,
  b: "hello",
  nested: {
    a: "a",
    b: "b"
  }
};

// Reference
obj = { b: 2 };
console.log(obj); // { b: 2 }
