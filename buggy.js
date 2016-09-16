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