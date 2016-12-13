// write fn that takes two arrays as
// and reorders with respect to order
// array = ['C', 'D', 'E', 'F', 'G']
// order = [3, 0, 4, 1, 2]
// result = ['D', 'F', 'G', 'C', 'E']
function reorder(arr, order) {
  var array = [];
  for (var i = 0; i < order.length; i++) {
    array[order[i]]=arr[i];
  }
  return array;
}
console.log(reorder(['C', 'D', 'E', 'F', 'G'],[3, 0, 4, 1, 2]));
