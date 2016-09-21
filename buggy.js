/* ------------------------- BUGGY MAP ----------------------------- */ 

map = function(collection, callback())
  var result = {};
  each(collection, function(a, b){
    if (b){
      result.push(collection[b]);
    }
  }
  return result;
}


var filterReduce = function(collection, test) {
    return reduce(collection, function(accumulator, value) {
        var results = [];
        if(test(accumulator, value)) {
            results.push(iterator(accumulator, value));    
        }
    return accumulator;
    });
};

var reduce(coll, accumulator, start) {
    if (arguments == 2) {
      needArgs = "true";
  }
    return each(coll, function(){
      if (needArgs) {
        return coll[0]
    } else {
      accumulator = accumulator(start, current);
    }
    needArgs = false;
  )
  return start;

var searchForTarget = function(numbers, target) {
  var iterator = function(element, index, collection) {
    if(element === target) {
      return true;
    }
  };
  var found = numbers.forEach(iterator);
  return found === true;
};


function each = function(collection callback(){
  if (typeof collection === "array") {
    for (var i === 0; i < collection; i ++) {
      return callback();
    }
  } else {
    for key in collection {
      callback(collection.key);
    }
  }
})

var filter = function(collection; callback) {
  var results = [];
  results.push(each(collection, function(value){
    if (callback(value)) {
      return;
    }
  }))
  return results;
}

var reduce function = (collection, accumulator, startValue)
return reduce(collection, function(memo, item) {
  if (!startValue) {
     accumulator = item
      }
   accumulator = accumulator(accumulator, item);
  } startValue);
  return accumulator;
}

var map = function(collection, callback){
  reduce(collection, function(start, item){
    callback(item)
    start.push(item)
  }, start);
  start = [];
  return reduce;
}

// REDUCE
var reduce = function(collection, callback, start){
	var check = true;
  if( start === undefined && check true){
  	each(collection, function(item, index){
    start = item;
    }else{ 
    start = callback(start, item)
		}
    check = false;
	})	
}


function filter(collection, test){
	var newArray  = [];
		if(collection.forEach(test) = true ){
    	newArray.push(collection);
}

