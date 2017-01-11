// Given a two-dimensional array of integers, return the
//flattened version of the array
// with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]],
//your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

var array = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
console.log(twoDsort(array));
function twoDsort(array) {
  var str ="";
  for (var i = 0; i < array.length; i++) {
    var x = array[i].sort().join("");
    str+=x;
  }
  var arr= str.split("");
  return arr;
}

// function flatten(arr) {
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++) {
//         newArr = newArr.concat(arr[i])
//     }
//     return newArr.sort();
// }
//
// flatten([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]);
