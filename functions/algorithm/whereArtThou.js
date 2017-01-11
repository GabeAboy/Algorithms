function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var firstN;
  var lastN;
  // if(source.hasOwnProperty('first')&&source.hasOwnProperty('last')){
    for (var i = 0; i < collection.length; i++) {
       firstN = collection[i].first;
       lastN = collection[i].last;
        if (source.first === firstN && source.last === lastN)arr.push(collection[i]);

    //}
  }
  // else{
  //   for (var j = 0; j < collection.length; j++) {
  //      firstN = collection[j].first;
  //      lastN = collection[j].last;
  //       if (source.last === lastN)arr.push(collection[j]);
  //
  //
  //   }
  // }

  // Only change code above this line
  return arr;
}
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));
/*whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].*/
