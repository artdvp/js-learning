// conditional
let theNumber = Number(10);
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}

// while loop
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

// do while
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// for loop
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

// break loop
for (let current = 20;; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

// switch
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}