// Write a function that outputs the transpose of a matrix
//  - a new matrix where the columns and rows of the original are swapped.
// For example, the transpose of:
// | 1 2 3 |
// | 4 5 6 |
// is
// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows.
// You can assume that each row has the same length, and that the
// height and width of the matrix are both positive.
// Test Cases
// tranpose([[1]]) should return '[[1]]'
// transpose([ [ 1, 2, 3 ] ]) should return '[[1], [2], [3]]'
// transpose([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]) should return '[[1, 4, 7], [2, 5, 8], [3, 6, 9]]'
// transpose([ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]) should return '[[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0]]'
// function transpose(matrix) {
// }
function transpose(array) {

  var answer = []
  for (var i = 0; i < array[0].length; i++) {
    var newPush = []
      for (var n = 0; n < array.length; n++) {
          newPush.push(array[n][i])
      }
    answer.push(newPush)
  }
  return answer
}
console.log(transpose([ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]));
