/*
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

console.log(laugh(3));
Prints: "hahaha!"
*/



function laugh(num)
{
    var st="ha";
   for(i=1;i<num;i++)
    {
      st+="ha";
        
    }
    return(st+"!")
    
    
}
console.log(laugh(3));
 
