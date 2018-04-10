/**
 * Function #6: Exceptions
 */
// Exception: Mishap operations protector.
let strongCheckAdd1 = a => {
  if (typeof(a) != "number") {
    throw {
      name: "TypeError",
      message: "add1 needs numbers"
    };
  }
  return a + 1;
};

var try_it = () => {
  try {
    strongCheckAdd1("abc");
  } catch (e) {
    console.log("Error:", e);
  }
};

try_it();
/**
 * Error: { name: 'TypeError', message: 'add1 needs numbers' }
 */
