/*  
 Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
*/


var laugh =function (num)
{
    var ha="";
    for(i=1;i<=num;i++)
     {
         ha+="ha";
     }
     return ha+"!";/* finish the function expression */
}
console.log(laugh(3));
