/*
Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
*/

// the global variable
var fixedValue = 4;

function incrementer (f) {
  // Add your code below this line
  return ++f;
  
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
