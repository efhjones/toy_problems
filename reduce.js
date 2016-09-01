/****************************************************************************************/
//                                      REDUCE FUNCTIONS                                //
/****************************************************************************************/

//     YOU SHOULD USE REDUCE 
//     AT LEAST ONCE IN ALL OF THESE FUNCTIONS! 
//     DON'T USE THE ARRAY.PROTOTYPE.REDUCE METHOD
//     YOU MAY RE-NAME ANY PARAMETERS AS YOU WISH, 
//     BUT DO NOT CHANGE THE NUMBER OF PARAMETERS.

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


/* Make Me Array */

//Create a function, using reduce, that takes in an object 
//and returns an array with the same values.
//reduce an object to be an array with the same values. 
//Your function should add only the object's
//values to the array, not its keys.

function makeMeArray(object) {
  //your code here!
}

//example:

var myObj = {0: 'banana', 1: 'grape', 2: 'peach', 3: 'apple', 4: 'pear', 5: 'strawberry'};
makeMeArray(myObj); //=> ['banana', 'grape', 'peach', 'apple', 'pear', 'strawberry']



