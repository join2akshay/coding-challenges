/*
James was creating an array with the colors of the rainbow, and he forgot some colors. 
The standard rainbow colors are usually listed in this order:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
but James had this:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

1. Remove "Blackberry"
2. Add "Yellow" and "Green"
3. Add "Purple"

*/


var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
//rainbow.slice(2);
rainbow.splice(2,1,"Yellow","Green");
rainbow.push("Purple");
console.log(rainbow);
