const color = "red";
const age = 2 
function bark() {
    console.log("hong");
}

const dog = {
    color: color,
    age: age,
    bark: bark
}

dog.bark()

// es6
const dog1 = {
    color: color,
    age: age,
    bark() {
        console.warn("hong")
    }
}

dog1.bark()

// es6
const doBark = "ba"+"rk"
const dog2 = {
    color: color,
    age: age,
    [doBark]: function() {
        console.warn("hong")
    }
}

dog2.bark()