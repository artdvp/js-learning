// function
const square = function (x) {
    return x * x;
}
console.log(square(12));

//

const makeNoise = function () {
    console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));
// → 1024

const halve = function (n) {
    return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

// Nested scope

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

// Functions as values

let launchMissiles = function () {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function () { /* do nothing */ };
}

// Arrow function
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

//
const square1 = (x) => {
    return x * x;
};
const square2 = x => x * x;

//
const horn = () => {
    console.log("Toot");
};

// Optional Arguments
function square(x) {
    return x * x;
}
console.log(square(4, true, "hedgehog"));
// → 16

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

// Closure