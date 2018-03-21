/*

i solved  this problem with Ternary Operator.
which is the shortcut or more advance way of IF...ELSE statement.


Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
undefined if an animal doesn't eat plants or animals
*/


var eatsPlants = true;
var eatsAnimals = true;
var category = eatsPlants && eatsAnimals ? "omnivore": eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined; /*your code goes here */

console.log(category);


