
function evenFinder(arr) {
  var filtered = arr.filter(even);
  function even(value) {
    return value%2===0;
  }
  return filtered;
}
console.log(evenFinder([1,2,3,4,5]));
