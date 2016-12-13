// Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle
// Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.
// For example:
// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
// For A visualtion representation of the trinagle see the code war link
// https://www.codewars.com/kata/pascals-triangle

function pascalsTriangle(height) {
 if (height === 1) {
        return [1];
 }
 var array = [1,1,1];

for (var i = 1; i <= height - 2; i++) {
       array.push(1);
  for (var n = 0; n < i; n++) {
        array.push(array[array.length-(i + 2)]+array[array.length-(i + 1)]);
  }
       array.push(1);
}
return array;
}
console.log(pascalsTriangle(5));
