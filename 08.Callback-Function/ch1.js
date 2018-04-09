/**
 * Function #5: Callback
 */
// Function can be used as arguments (Callback)
let callback1 = total => {
  console.log("Oh! Already finished! Total:", total);
};

let callback2 = total => {
  console.log("Wait so long, Boring. Total:", total);
};

let process = cb => {
  let total = 0;
  for (let i = 0; i < 100; i++) {
    total += 1;
  }
  cb(total); // call the callback when the long operation done.
};

process(callback1);
process(callback2);
