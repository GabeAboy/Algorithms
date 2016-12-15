// Fold an array
// In this toy problem you have to write a method
// that folds a given array of integers by the middle x-times.
// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]
// A little visualization (NOT for the algorithm but for the idea of folding):
//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                5 4  4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*
// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
//
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.
// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.
// If an array with one element is folded, it stays as the same array.
function foldingTime(array,n) {
  var newArray = array.slice();
  for (var z = 0; z < n; z++) {
    if(newArray.length%2===1){
      var newLength = Math.floor(newArray.length/2)+1;

      var x = newArray.length - newLength;
      var fold = newArray.splice(newLength,x).reverse();
      for (var i = 0; i < fold.length; i++) {
        newArray[i]+=fold[i];

      }
    }
    else{
      var newLength = newArray.length/2
      var fold = newArray.splice(newLength,newLength).reverse();
      for (var i = 0; i < fold.length; i++) {
        newArray[i]+=fold[i];
      }
    }
  }
  return newArray
}
console.log(foldingTime([1,2,3,4,5],2));
