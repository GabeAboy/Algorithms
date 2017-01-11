/*// Write a function named 'replaceOdd' that takes in an array of numbers,
and changes all of the odd numbers to the letter 'O'.
//replaceOdd([1,2,3,4,5,6,7,8,9,10]) => [0, 2, 0, 4, 0, 6, 0, 8, 0, 10]*/
function replaceOdd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]%2!==0) arr[i] = "O";
  }
  return arr;
}
console.log(replaceOdd([1,2,3,4,5,6,7,8,9,10]));
