/**
 * Promises in JavaScript with ES6 / ES2015
 * from : https://alligator.io/js/promises-es6/
 */
let myPromise = new Promise((resolve, reject) => {
  let data;
  setTimeout(() => {
    data = "Some payload";
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  }, 2000);
});

myPromise
  .then(data => {
    console.log("Received: " + data);
  })
  .catch(() => {
    console.log("There was an error");
  });

// Received: Some payload

// Chaining  Promises

myPromise
  .then(data => {
    console.log("Received: " + ddata);
    let moreData = "Another payload";
    return moreData;
  })
  .then(data => {
    console.log(data);
  })
  .catch(() => {
    console.log("There was an error");
  });

  /**
   * Received: Some payload
   * There was an error
   */