/**
 * Exercise
 * ref : https://kobkrit.com/react-native-tutorial-lecture-2-modern-javascript-programming-language-with-es6-es2015-98eefadf6b0d
 */

// =======> Date: 2018-04-10

// example 12.3 => "one two dot three"
let number = "123.34";
let numToWord = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  ".": "dot"
};

let toWordNum = strNum => {
  for (let i = 0; i < strNum.length; i++) {
    const element = strNum[i];
    console.log(element);
  }
};

let toWordNum2 = strNum2 => {
  let arr = [];
  for (let i in strNum2) {
    arr.push(strNum2[i]);
  }
  console.log(
    arr
      .map(x => {
        return numToWord[x];
      })
      .join(" ")
  );
};

toWordNum("123.34");
toWordNum2("345.67");
// three four five dot six seven

// =======> Date: 2018-04-11
// Problem
/**
 * Write sumArray([12,3,4,1,2,3]) = 25
 */
let sumArray = args => {
  let total = 0;
  for (ar in args) {
    total += parseInt(args[ar]);
  }
  return total;
};

console.log(sumArray([12, 3, 4, 1, 2, 3]));
// 25

// Problem
/**
 * Write function that count word size case-insensitively
 * Input: "Hello world hello earth earth" (Not limited to these word, it can be any words)
 * Output: Object{hello:3, world: 1, earth:2 }
 */

function countWordInCase(word) {
  let arrA = [],
    objB = {};
  arrA = word.split(" ");
  for (i in arrA) {
    if (arrA[i] === arrA[i].toLowerCase()) {
      if (objB[arrA[i]] === undefined) {
        objB[arrA[i]] = 1;
      } else {
        objB[arrA[i]] += 1;
      }
    }
  }
  return objB;
}

console.log(
  countWordInCase(
    "Hello hello world hello earth earth world take world make Hey"
  )
);
// { hello: 2, world: 3, earth: 2, take: 1, make: 1 }
