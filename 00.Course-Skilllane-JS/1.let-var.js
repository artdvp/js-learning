// var
var name = "Lani";

let name2 = "mama"; // block scope

// var out of scope
var stack = [];
for (var i = 0; i < 10; i++) {
  stack.push(function() {
    console.warn(i);
  });
}

stack.forEach(function(f) {
    f()
})

// var

// let
var stack1 = [];
for (let i = 0; i < 10; i++) {
  stack1.push(function() {
    console.warn(i);
  });
}

stack1.forEach(function(f) {
    f()
})