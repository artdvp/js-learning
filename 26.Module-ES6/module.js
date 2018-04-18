/**
 * ES6 Modules
 * from : https://alligator.io/js/modules-es6/
 */

// Exporting
export const myNumbers = [1, 2, 3, 4];

const animals = ["Panda", "Bear", "Eagle"];

export function myLogger() {
    console.log(myNumbers, animals)
}

export class Alligator {
    contructor() {
        // ...
    }
}

// export { myNumbers, myLogger, Alligator }

// Exporting with alias
// export { myNumbers, myLogger as Logger, Alligator }

// default export

export const myNumbers2 = [1, 2, 3, 4];

const animals2 = ["Panda", "Bear", "Eagle"];

export default function myLogger2() {
    console.log(myNumbers, animals)
}

export class Alligator2 {
    contructor() {
        // ...
    }
}

// Import 

import { myLogger, Alligator } from 'app.js'

// Importing with alias

// import myLogger2 as Logger from 'app.js'

// Importing all exported members

import * as Utils from 'app.js'

Utils.myLogger();

// Importing a module with a default member

import Logger from 'app.js'

import Logger, { Alligator, myNumbers } from 'app.js'
