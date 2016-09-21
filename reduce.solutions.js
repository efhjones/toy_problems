/************ EXTEND ************/

function each (collection, callback){
  if (Array.isArray(collection) || typeof collection === 'string'){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else {
    for (var key in collection){
      callback(collection[key], key, collection)
    }
  }
}

function reduce(collection, callback, startValue){
  each(collection, function(item, key){
    if (startValue === undefined){
      startValue = item;
    } else {
      startValue = callback(startValue, item, key);
    }
  });
  return startValue;
}

var extend = function(thisObj, thatObj) {
  return reduce(thatObj, function(thisObj, item, key){
    thisObj[key] = item;
    return thisObj;
  }, thisObj)
};


/************ DIFFERENCE ************/


function difference(array1, array2, array3) {
  return reduce(array1, function(array, item){
    if (array2.indexOf(item) === -1 && array3.indexOf(item) === -1){
      array.push(item);
    }
    return array;
  }, []);
};