// arrow functions

let data = [1, 2, 3]

let newData = data.map((x) => {
    const y = x + 1;
    return x * y
})

console.log("newData", newData);

// ==========================================================

let newData1 = data.map((number) => {
    const nextNumber = number + 1;
    return `A string containing this ${nextNumber}.`;
})


console.log("newData1", newData1);

// =============================================

let newData2 = data.map((number, index) => ({
    [index]: number,
}));

console.log("newData2", newData2);

// ================================================

// good
let newData3 = data.map(number => (
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

console.log("newData3", newData3);
// ================================================

let dataStr = ['get', 'post', 'put'];

/*
let newDataStr = dataStr.map(httpMethod => (
    Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
    )
));

console.log(newDataStr);
*/
// =================================================================

function addition(a, b) {
    return a + b;
}

const addition2 = (a, b) => a + b;

const add5 = a => 5 + a;

// ==================================================================

const arr = ['apple', 'banana', 'orange'];

const breakfast = arr.map(fruit => {
    return fruit + 's';
});

console.log(breakfast);

// ===========================================

const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

const itemHeight2 = (item) => {
    const {
        height,
        largeSize,
        smallSize
    } = item;
    return height > 256 ? largeSize : smallSize;
}