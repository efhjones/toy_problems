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
//for cats whose coloring includes the given color.

function catColors(array, color){
  //your code here!
};

//example:
var result = catColors(petStore, 'orange');
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
//and add the property 'adopted' to the cat object whose
//name will be given in the parameters.

function addAdoptions(array, catName){
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

//Exercise 4:
//Now we want to see which of the cats in our database 
//have been adopted.
//Create a function that will organize our cats into
//Two objects: Adopted and not adopted.

function organizeCats(array) {
  //your code here!
}

//example:

addAdoptions(petStore, 'Fred');
addAdoptions(petStore, 'Twinkie');
addAdoptions(petStore, 'Eisie');

var result = organizeCats(petStore);
console.log(result);//=> 

/*
var result = {
  adopted: ['Fred', 'Twinkie', 'Eisie'],
  notAdopted: ['NyanCat', 'Tinkerbell', 'Tabs', 'Maxie']
}

*/

//Exercise 5:
//Uh oh, looks like a naming system for our database isn't 
//sufficient. We'd also like to add an id to each cat.
//Write a function that will add an ID to each cat.
//Keep in mind that no two IDs can be alike.
//Once you've done that, adjust your addCat function 
//so that it automatically assigns a new cat ID to 
//each cat added.


function addIDs(array) {
  //your code here!
}

//example:

addIDS(petStore);
addCat('Jasper', '13lbs', 'male', 'black', 'white');
console.log(petStore);//=>
/*
var petStore = [
  {
    name: 'Maxie',
    weight: '10lbs', 
    gender: 'male',
    colors: ['gray', 'white', 'brown'],
    ID: 1
  },
  {
    name: 'Tabs',
    weight: '8lbs',
    gender: 'female',
    colors: ['white', 'orange'],
    ID: 2
  },
  {
    name: 'Friday',
    weight: '9lbs',
    gender: 'female',
    colors: ['white', 'orange', 'black', 'brown'],
    ID: 3
  },
  {
    name: 'Eisie',
    weight: '13lbs',
    gender: 'female',
    colors: ['white', 'gray', 'tan'], 
    ID: 4
  },
  {
    name: 'Tinkerbell',
    weight: '7lbs',
    gender: 'female',
    colors: ['white'],
    ID: 5
  },
  {
    name: 'Jasper;,
    weight: '13lbs',
    gender: 'male',
    colors: ['black', 'white'],
    ID: 6
  }
];
*/