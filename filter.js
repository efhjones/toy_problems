/****************************************************************************************/
//                                   FILTER FUNCTIONS                                   //
/****************************************************************************************/

//     YOU SHOULD USE FILTER 
//     AT LEAST ONCE IN ALL OF THESE FUNCTIONS! 
//     DO NOT USE THE ARRAY.PROTOTYPE.FILTER METHOD
//     YOU MAY RE-NAME ANY PARAMETERS AS YOU WISH, 
//     BUT DO NOT CHANGE THE NUMBER OF PARAMETERS.

/* IMPLEMENT FILTER */

//Create a function filter, that takes in a collection and a predicate,
//and checks whether each value in the collection passes or fails the predicate.
//If the item passed into the predicate function returns true, your filter function should
//push that value into a results array.
//and finally, return the results array.
//You should use your filter function to complete the rest of the these problems!

function filter(collection, callback){
  //your code here!
}


/* Strings With A */

//Write a function to filter an array of strings, returning only those strings that
// start with the letter 'a'. Your function should use the 'filter' function you wrote in our
// lessons.

function stringsWithA(arrayOfStrings) {
  //your code here!
}

// examples:

var strings = ['antelope', 'ant', 'cheetah', 'dog', 'wolf', 'ape'];
stringsWithA(strings); //=> ['antelope', 'ant', 'ape']


//extra credit:
  //Make your function capitalize the first letter in each string. 
  //Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase




/* Vowel Strings */

//Write a function to filter an array of strings and 
// return only those strings that start with a vowel.

function vowelStrings(arrayOfStrings) {
  //your code here!
}

// examples:

var strings = ['cat', 'pig', 'aardvark', 'bird', 'elephant', 'koala', 'ostrich'];
vowelStrings(strings); //=> ['aardvark', 'elephant', 'ostrich']




/*  Greater Than Three Arrays */

//Write a function to filter an array of arrays. Your function, given a nested array, should
//return only those subarrays whose length is greater than 3.

function greaterThanThreeArrays(nestedArray) {
  //your code here!
}

// examples:

var arrayOfArrays = [ ['a', 'b' ], [1, 2, 3, 4], [true, true, false, true], ['cat', 'dog', 'fish'] ];
greaterThanThreeArrays(arrayOfArrays); //=> [ [1, 2, 3, 4], [true, true, false, true] ]



/* Double Evens */

//Create a function that will take an array of numbers and return an array of only the even values
// each value multiplied by two. 
// You should use both Filter and Map in your implementation. The map function you should use should
// be the one you created in our lessons, NOT the Array.prototype.map method.

function doubleEvens (numberArray) {
  //your code here!
}

// examples: 

var numbers = [1, 2, 3, 4, 5, 6,];
doubleEvens(numbers); //=> [4, 8, 12]

// extra credit:
  //Find a way to output [12, 8, 4] instead. You should not need to iterate over the array.
  //Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift




/* FilterReduce */

//Create a function that takes an array of numbers. Your function should:  
// 1. Use filter to first, filter out numbers that have no decimal place, 
// 2. then use reduce to add them together
// Your function should return a number, not a number in an array.


function filterReduce(array) {
  //your code here!
}

var crazyNums = [1, 1.3, 2, 3, 4, 4.4, 5, 5.9];
filterReduce(crazyNums); //=> after the filter function: [1, 2, 3, 4, 5]
                         //=> the final result: 15


/* Only Uniques */ 

// Create a function that, using filter, takes in a string
// and produces a string that contains letters that appear 
// only once in that string.


var onlyUniques = function(str) {
  // your code here!
}

//example:

onlyUniques('bananas') // => 'bs'

/* RecordAfterF */

//Create a function that will use filter to:
// filter out letters beginning with a char code after F
  //This would include charcodes from 70 - 90, inclusive, and 103 - 122, inclusive.
// your function should then use reduce to place each item in an object.
// The object should have the letter as key, and the charcode as value.

function recordAfterF() {
  //your code here!
}

// examples:

var letters = ['A', 'b', 'z', 'E', 'N', 'k', 'c', 'd', 'w', 'T'];
recordAfterF(letters); //=> {'A': 65, 'b': 98, 'c': 99, 'd': 100, 'E': 69}

//Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
//           http://www.w3schools.com/charsets/ref_html_ascii.asp


/* Five Stars */

//Create a function that will use filter to 
//choose from the given listen of movies,
//only those movies that received a 5 star rating.

function fiveStars(array) {
  //your code here!
}

// examples:

var movies = [
  {title: 'Amelie', rating: 5}, 
  {title: 'Harry Potter', rating: 4},
  {title: 'Ratatouille', rating: 5}, 
  {title: 'Die Hard', rating: 2}
];

fiveStars(movies);//=> [{title: 'Amelie', rating: 5}, {title: 'Ratatouille', rating: 5}]


//# Get Colors

// Given an array of objects, iterate over the array with a loop or the filter method.
// If the item's color is blue, add that item as an object to the array.
// The key of the object should be the item's index, and the value should be the item's
// color.

function getColors(arrayOfObjs) {
  //your code here!
}

//example:

var closet = [
  {item: "Jeans", color: "blue"}, 
  {item: "Shoes", color: "red"}, 
  {item: "Shirt", color: "blue"}, 
  {item: "Belt", color: "brown"}
];

var result = getColors(closet);
console.log(result);
//=> [{item: "Jeans", color: "blue"}, , {item: "Shirt", color: "blue"}, ]



//# Cats Cats Cats


var catCollection = [
  {
    name: 'Maxie',
    weight: '10lbs', 
    gender: 'male',
    colors: ['gray', 'white', 'brown']
  },
  {
    name: 'Tabs',
    weight: '8lbs',
    gender: 'female',
    colors: ['white', 'orange']
  },
  {
    name: 'Friday',
    weight: '9lbs',
    gender: 'female',
    colors: ['white', 'orange', 'black', 'brown']
  },
  {
    name: 'Eisie',
    weight: '13lbs',
    gender: 'female',
    colors: ['white', 'gray', 'tan']
  },
  {
    name: 'Tinkerbell',
    weight: '7lbs',
    gender: 'female',
    colors: ['white']
  }
];

//Exercise 1: 
//Create a function that will filter the given array of objects
//for cats whose coloring includes orange.

function orangeCats(array){
  //your code here!
};

//example:
var result = orangeCats(catCollection);
console.log(result); //=> 
/*
[
  {
    name: 'Tabs',
    weight: '8lbs',
    gender: 'female',
    colors: ['white', 'orange']
  },
  {
    name: 'Friday',
    weight: '9lbs',
    gender: 'female',
    colors: ['white', 'orange', 'black', 'brown']
  }
]
*/

