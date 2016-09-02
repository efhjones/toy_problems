/****************************************************************************************/
//                                      REDUCE FUNCTIONS                                //
/****************************************************************************************/

//     YOU SHOULD USE REDUCE 
//     AT LEAST ONCE IN ALL OF THESE FUNCTIONS! 
//     DON'T USE THE ARRAY.PROTOTYPE.REDUCE METHOD
//     YOU MAY RE-NAME ANY PARAMETERS AS YOU WISH, 
//     BUT DO NOT CHANGE THE NUMBER OF PARAMETERS.

/* IMPLEMENT EACH */

function each(collection, callback) {
  //your code here!  
}


/* IMPLEMENT REDUCE */

//Create a function reduce, that takes in a collection, a callback/accumulator,
// and a startValue iterates through a collection, setting the startValue 
// each time to the result of performing a callback/accumulator function 
// on the startValue and each item in that collection.
//Your function should be like the one you implemented in your session, 
//using each.
//Once you're done, use your reduce function to solve the other prompts.
//If you decide to run your functions, you may need to include an 
//implementation of each.

function reduce(collection, callback, startValue) {
  //your code here!
}





/* Sum All numbers */

//Create a function sumAllNumbers that takes in a collection and uses reduce to return the
//sum of all numbers in the function.

function sumAllNumbers(collection){
  //your code here!
}

//examples:

var numbers = [1,2,3,4,5];

sumAllNumbers(numbers); //=> 15

//extra credit:
  //try out your function with an object. Does it work the same way? Why/why not?

  //example:

  var numberObj = {banana: 1, grape: 2, apple: 3, pear: 4, peach: 5};
  sumAllNumbers(numberObj); //=> ????

//now, add a startValue to your implementation of your sumAllNumbers function.
//Try using your function with 10 as its startValue. 
//Is the result what you expected? Why / why not?

/* Add One More */

//Create a function that, using reduce, will add an incrementing-by-one 
//value while it sums up an array.
//For example, our function should sum all the numbers in an array, 
//the first time adding one. On subsequent iterations, our 
//function should add an extra 2, then 3, then 4, etc.

function addOneMore(collection) {
  //your code here!
}

//example:
  var numbers = [1,2,3,4,5];
  addOneMore(numbers); //=> 25

/******************************* REDUCING WITH OBJECTS ********************************/

//Reduce's startValue doesn't need to be a number! We can pass almost anything as a 
// startValue for reduce and make it work! For example, let's look at a use case with an 
//object: 

function makeMeObj(array){
  return reduce(array, function(object, item){ // 'object' is really a variable that acts as a 
                                               // placeholder for our startValue. Since our startValue 
                                               // is an object, it makes sense to name this parameter 
                                               // 'object'.
    object[item] = true; //this is where we add the key value pair to our object
    return object; //be sure to return the object (startValue) at the end! 
                   //This is how we incrementally add thigs to our object!
  }, {})
}

var fruits = ['apple', 'pear', 'banana', 'peach'];

makeMeObj(fruits); //=> {apple: true, pear: true, banana: true, peach: true}


//try this function without the return statement. Why does it break?
//Try this function with return object[item] = true; instead of how it is. Why does it break?
//run the function in pythontutor.com to watch it work step-by-step.


/* Build A String */

//Create a function that will take in an array of letters and, 
//with an empty string as a startValue, return a string using reduce.

function buildAString(array) {
  //your code here!
}

//example:

var letters = ['l','i','k','e', ' ', 'm', 'a','g','i','c','!'];
buildAString(letters); //=> 'like magic!'



/* Only A's */

//Create a function that will take in an array of strings, and return a string with only
//words that start with the letter A. 

function onlyAs(arrayOfStrings) {
  //your code here!
}

//example:

var differentStrings = ['apple', 'cat', 'aardvark', 'alaska', 'dog', 'banana', 'california'];

onlyAs(differentStrings); //=> 'apple aardvark alaska'

  //extra credit: 
  // compose an array of strings that begin with a, rather than a string

  //example:

  onlyAs(differentStrings); //> ['apple, aardvark, alaska']


/* Object Values */

//Create a function, using reduce, that takes in an object 
//and returns an array with the same values.
//reduce an object to be an array with the same values. 
//Your function should add only the object's
//values to the array, not its keys.

function objectValues(object) {
  //your code here!
}

//example:

var myObj = {0: 'banana', 1: 'grape', 2: 'peach', 3: 'apple', 4: 'pear', 5: 'strawberry'};
makeMeArray(myObj); //=> ['banana', 'grape', 'peach', 'apple', 'pear', 'strawberry']


/* Every */

//Create a function every that takes in a collection and a predicate function (a callback 
//function that returns true or false) and returns true if every item in the array
//passes the predicate function and false otherwise. Use reduce in your implementation.

function every (collection, predicate) {

}


//example:
function greaterThanZero(val) {
  if (val > 0){
    return true;
  }
  return false;
}

function isEven(val) {
  return val % 2 === 0;
}

var myArray = [1,2,3,4,5];

every(myArray, greaterThanZero); // => true
every(myArray, isEven); //=> false


/* Some */

// Determine whether any of the items in the given array pass a truth
// test. 

function some(collection, predicate) {
  // your code here!
}

//example:
var otherArray = [-1, -2, -3, -4, -5];

some(myArray, isEven); // => true
some(otherArray, isEven); // true
some(otherArray, greaterThanZero); // false



/* Letter Count */

// Create function letterCount that accepts a string as an argument
// and returns an object. The object should contain every letter
// that appears in the string and the number of times each letter
// appears. Since your implementation

function letterCount(str){
  //your code here
}

//example:
letterCount('abbccc');// => {a: 1, b: 2, c: 3};

/* getMin */ 

//Create a funciton that accepts a collection as its only argument
//and returns the lowest value in that collection. Your solution should work
//both with arrays and with the values in objects.

function getMin(collection) {
  //your code here!
}

//example:

var myArray = [5,3,1,4,2];
var myObj = {three: 3, four: 4, one: 1, five: 5, two: 2};

getMin(myArray); //=> 1
getMin(myObj); //=> 1

/* Pluck */

// Create a function that will take in an array of objects and return an array of
// the values of a certain property in it. 
// E.g. take an array of people and return an array of just their ages

function pluck(collection, key) {
  //your code here!
};

//example: 

var myObjArray = [ {name: 'Harry', age: 33}, {name: 'Ron', age: 32}, {name: 'Hermione', age: 31} ];
pluck(myObjArray, age); //=> [33, 32, 31]


/* Extend */

//Warning, this one is tough!
//Create a function extend that will take in two objects.
//The first should be the object you want to extend (or add
//properites to) and the second object should contain all the 
//keys and values you want to add to the first object.
//Warning: You may need to adjust your each and reduce implementation
//in order to have access to all the keys and values that you need.


  var extend = function(thisObj, thatObj) {
    //your code here!
  };


var obj1 = {hello: 'orange', goodbye: 'blue'};
var obj2 = {bonjour: 'pink', 'au revoir': 'green'};
let result = extend(obj1, obj2); 
  /* => 
{
  au revoir: "green", 
  bonjour: "pink",  
  goodbye: "blue",  
  hello: "orange"
}
*/


//Extra Work:

//If you finish the above problems, check out http://reactivex.io/learnrx/
//These will prompt you to use the functions that you've been implementing to
//solve problems. As it only evaluates your work but doesn't help you, it's a greater 
//way to test your knowledge! 