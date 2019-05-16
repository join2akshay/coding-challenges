/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  

  var temp=0;
 
  for(var i=Math.min(...arr);i<=Math.max(...arr);i++)
    {
      temp+=i;

    }
    return temp;
}

sumAll([1, 4]);
