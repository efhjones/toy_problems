/****************************************************************************************/
//                                      MAP FUNCTIONS                                   //
/****************************************************************************************/

//     YOU SHOULD USE MAP 
//     AT LEAST ONCE IN ALL OF THESE FUNCTIONS! 
//     DON'T USE THE ARRAY.PROTOTYPE.MAP METHOD
//     YOU MAY RE-NAME ANY PARAMETERS AS YOU WISH, 
//     BUT DO NOT CHANGE THE NUMBER OF PARAMETERS.

/* IMPLEMENT MAP */

//Create a function map, that takes in a collection and a callback,
//performs the callback on each item in the collection,
//pushes the result of that callback to a results array,
//and finally, returns the array.
//You should use your map function to complete the rest of the these problems!


function map(collection, callback){
  //your code here
}



/* Add S */

//Create a function addS to add an s to the end of every string in the given array.

function addS(arrayOfStrings) {
  //your code here
}

//examples:

var singles = ['cat', 'bird', 'dog', 'orange', 'lemon', 'cake'];
addS(singles); //=> ['cats', 'birds', 'dogs', 'oranges', 'lemons', 'cakes']

// extra credit: 
  // make your function check if the word is already plural. 
  // If it is, remove the s. If it's not, add the s.

  //examples: 

  var whoKnows = ['cats', 'pidgeons', 'name', 'rivers', 'light', 'fields'];
  addS(whoKnows); //=> ['cat', 'pidgeon', 'names', 'river', 'lights', 'field'];




/* Add Prefix */

//Create a function that, using map, iterates over an array of objects.
//If that person is a female, prefix 'Ms' to the name.
//If that person is male, prefix 'Mr' to the name.
//Your function should return an array that contains only the names with the added prefix.

function addPrefix(arrayOfObjects) {
  //your code here
}

//examples:

var ladiesAndGents = [ {name: 'John', sex: 'male'}, {name: 'Kelly', sex: 'female'}, {name: 'Adam', sex: 'male'}, {name: 'Cathy', sex: 'female'} ];
addPrefix(ladiesAndGents); //=> ['Mr. John', 'Ms. Kelly', 'Mr. Adam', 'Ms. Cathy']



/* Recipe Instructions  */

//Create a function that will take in an array of objects, whose objects will contain an 
//instructional step in a recipe, as well as a list of ingredients needed.
//Your function should produce an array with only the steps included.

function recipeInstructions(arrayOfObjects) {
  //your code here
}

//examples:
var recipeCard = [ 
  {step: '1. Pour milk and eggs into bowl.', ingredients: ['milk', 'eggs'] }, 
  {step: '2. Mix flour with sugar and baking soda.', ingredients: ['flour', 'sugar', 'baking soda']}, 
  {step: '3. Mix flour mixture with milk mixture.', ingredients: null}, 
  {step: '4. Place 2-tablespoon size heaps of batter on grease baking sheet', ingredients: null} 
];
recipeInstructions(recipeCard); /* => 
  ['1. Pour milk and eggs into bowl.', 
  '2. Mix flour with sugar and baking soda.', 
  '3. Mix flour mixture with milk mixture.', 
  '4. Place 2-tablespoon size heaps of batter on grease baking sheet']

*/




/* Capitalize */
//Create a function that will use map to iterate over array of names, 
//making each first name capitalized, and return the array with capitalized names.

function capitalize(arrayOfNames) {

}

//examples:
var names = ['connor', 'nick', 'peranat', 'heather', 'karen', 'ron', 'felipe'];
capitalize(names);//=> ['Connor', 'Nick', 'Peranat', 'Heather', 'Karen', 'Ron', 'Felipe'];

//extra credit: 
  //Make it so that your function will capitalize the letters both at the beginning of a person's
  //first name, as well as their last

  //examples:
  var fullNames = ['leslie knope', 'liz lemon', 'tom haverford', 'michael scott', 'dwight schrute'];
  capitalize(fullNames); //=> ['Leslie Knope', 'Liz Lemon', 'Tom Haverford', 'Michael Scott', Dwight Schrute'];



/* Even And Odd */
//Create a function that will use map to:
//Map over an array of numbers, pushing 'even' onto the array if the number is even,
// and odd if the number is odd

function evenAndOdd(numberArray) {

}

//examples:
var numbers = [1,2,3,4,5,6];
evenAndOdd(numbers); //=> ['odd', 'even', 'odd', 'even', 'odd', 'even'];

//extra credit:
  //Make it so that your function returns an array of arrays, one with all evens, and one with all odds.

  //examples:
  evenAndOdd(numbers); //=> [ [even, even, even], [odd, odd, odd] ]




/* DoubleSubArrays */

//Create a function that will:
//use each to iterate over an array of arrays
  //at each index, use map to iterate over over the array held there and replace it with an array of 
  //doubled values

function doubleSubArrays() {

}

//examples:

var subArrays = [ [1,2,3], [4,5,6], [7,8,9] ];
doubleSubArrays(subArrays); //=> [ [2, 4, 6], [8, 10, 12], [14, 16, 18] ]

//extra credit: 
  //modify your function so that it accepts subarrays with strings. If the subarray contains a string,
  //add an s to the end of the string. Otherwise, double the number as usual.

  //examples:
  