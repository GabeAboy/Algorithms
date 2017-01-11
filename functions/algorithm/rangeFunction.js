function rangeFunction(first,skipper,last) {
  if(last===undefined&&skipper){
    last = skipper;
    skipper = 1;

  }
  else if(skipper===0||skipper===undefined)skipper = 1;
  if (last===undefined){
      last = first;
      first = 1;
  }
  var array = [];
    for (first; first <= last; first+=skipper) {
      array.push(first);
    }
    return array;
}
console.log(rangeFunction(46,50));
