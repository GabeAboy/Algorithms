/*WITHOUT USING reverse METHOD
reverseArray, takes an array as argument and
produces a new array that has the same elements
in the inverse order*/
function reverseArray(arr) {
  arr.sort();
  var arra=[];
  while(arr.length){arra.push(arr.pop());}
  return arra;
}

var array = [1,2,3,4,5];
console.log(reverseArray(array));
