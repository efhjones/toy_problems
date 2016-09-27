//# Cats Cats Cats


var petStore = [
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
var result = orangeCats(petStore);
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

//Exercise 2:
//We need to add the ability to denote whether or not a cat 
//has been adopted.
//Create a function that will map through the given array, 
//and add the property 'adopted' to each cat object.

function addAdoptions(array){
  //your code here!
}

//example:

addAdoptions(array);
console.log(array); //=>
/*

var petStore = [
  {
    name: 'Maxie',
    weight: '10lbs', 
    gender: 'male',
    colors: ['gray', 'white', 'brown'],
    adopted: false
  },
  {
    name: 'Tabs',
    weight: '8lbs',
    gender: 'female',
    colors: ['white', 'orange'],
    adopted: false
  },
  {
    name: 'Friday',
    weight: '9lbs',
    gender: 'female',
    colors: ['white', 'orange', 'black', 'brown'],
    adopted: false
  },
  {
    name: 'Eisie',
    weight: '13lbs',
    gender: 'female',
    colors: ['white', 'gray', 'tan'],
    adopted: false
  },
  {
    name: 'Tinkerbell',
    weight: '7lbs',
    gender: 'female',
    colors: ['white'],
    adopted: false
  }
];

*/

//Exercise 3:
//We'd like to begin adding cats to our database.
//Create a function that will take in the parameters you see
//in the object above, and add a new cat object to our pet store
//following the same format as it appears within the array.
//Your function should allow for any number of colors.

function addCat(){
  //your code here!
}

addCat('Fred', '20lbs', 'male', 'gray', 'white', 'brown');
addCat('NyanCat', '1lb', 'unclear', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet');

console.log(petStore);//=>
/*
var petStore = [
  {
    name: 'Maxie',
    weight: '10lbs', 
    gender: 'male',
    colors: ['gray', 'white', 'brown'],
    adopted: false
  },
  {
    name: 'Tabs',
    weight: '8lbs',
    gender: 'female',
    colors: ['white', 'orange'],
    adopted: false
  },
  {
    name: 'Friday',
    weight: '9lbs',
    gender: 'female',
    colors: ['white', 'orange', 'black', 'brown'],
    adopted: false
  },
  {
    name: 'Eisie',
    weight: '13lbs',
    gender: 'female',
    colors: ['white', 'gray', 'tan'],
    adopted: false
  },
  {
    name: 'Tinkerbell',
    weight: '7lbs',
    gender: 'female',
    colors: ['white'],
    adopted: false
  },  
  {
    name: 'Fred',
    weight: '20lbs',
    gender: 'male',
    colors: ['gray', 'white', 'brown'],
    adopted: false
  }
  {
    name: 'NyanCat',
    weight: '1lb',
    gender: 'unclear',
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    adopted: false
  }
];

*/