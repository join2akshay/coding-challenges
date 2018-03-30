/*
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. 
See the example output below.

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * *
*/


function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}


function buildTriangle(num)
{
    var triangle="";
    for(i=1;i<=num;i++)
      {
       triangle+= makeLine(i);
      }
   return triangle;
}

console.log(buildTriangle(10));
