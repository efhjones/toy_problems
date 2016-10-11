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
//For extra credit, allow for multiple cat names at once.
//Take a look at this resource to determine how you might 
//gather all the arguments passed to your function:
//Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like_objects

function addAdoptions(array, catName){
  //your code here!
}

//example:

addAdoptions(array, 'Maxie');
addAdoptions(array, 'Eisie');

//extra credit:
//addAdoptions(array, 'Maxie', 'Eisie');

console.log(array); //=>
/*

var petStore = [
  {
    name: 'Maxie',
    weight: '10lbs', 
    gender: 'male',
    colors: ['gray', 'white', 'brown'],
    adopted: true
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
    adopted: true
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


//Exercise 6:
//Looks like some of our cats are overweight or underweight.
//We'd like to promote the health of our felines,
//so we need to know how much food to ration each cat.
//If a cat is over 10lbs, the cat should get 1 cup daily.
//If a cat is between 8 and 10lbs, 
//the cat should get 1.2 cups daily.
//If the cat is less than 8lbs, the cats should get
//1.5 cups daily.

//With this information, write a function that will
//Tell us how much food each cat should get.

function foodRations(array) {
  //your code here!
}

//example:

var result = foodRations(petStore);
console.log(result);//=>
/*

var result = {
  Maxie: {
    ID: 1,
    ration: 1.2 cups daily
  },
  Tabs: {
    ID: 2,
    ration: 1.2 cups daily
  },
  Friday: {
    ID: 3,
    ration: 1.2 cups daily
  },
  Eisie: {
    ID: 4
    ration: 1 cup daily
  },
  Tinkerbell: {
    ID: 5,
    ration: 1.5 cups daily
  },
  Jasper: {
    ID: 6,
    ration: 1 cup daily
  }
};

*/


//Exercise 6.5:
//That's great, but let's get our data into a more readable
//format. Create a function that will organize the data you
//receive from foodRations into a result like this:

function printRations(object) {
  //your code here!
}

var result = printRations(petStore);//=>
/*
var result = [
 'Maxie: 1 cup daily',
 'Tabs: 1.2 cups daily',
 'Friday: 1.2 cups daily',
 'Eisie: 1 cup daily',
 'Tinkerbell: 1.5 cups daily',
 'Jasper: 1 cup daily'
];

*/

//Exercise 7:
//Add a bit more functionality to your foodRations function.
//Your function should be able to handle both an array, 
//or a specific cat. If foodRations('Eisie') is entered, 
//your function should return just the food rations for Eisie
//(you may use your printRations function to handle this task).
//However, if there is no argument or if the argument is an
//array, your foodRations function should return the whole result
//as usual. 

//Example:

var result = foodRations('Eisie'); //=> result = ['Eisie: 1 cup daily']
var result2 = foodRations();//=> 
/*

var result = {
  Maxie: {
    ID: 1,
    ration: 1.2 cups daily
  },
  Tabs: {
    ID: 2,
    ration: 1.2 cups daily
  },
  Friday: {
    ID: 3,
    ration: 1.2 cups daily
  },
  Eisie: {
    ID: 4
    ration: 1 cup daily
  },
  Tinkerbell: {
    ID: 5,
    ration: 1.5 cups daily
  },
  Jasper: {
    ID: 6,
    ration: 1 cup daily
  }
};

*/