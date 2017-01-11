var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a set of random numbers to both arr1 and arr2.
//Write a function called 'longer' that is given arr1 and arr2 as its only arguments and returns the array that is longer.

// Code Here

var longerArray = longer(arr1, arr2); // This is for testing purposes. Do not change.

console.log(longerArray);
function longer(arr1,arr2) {
  var one = arr1.length;
  var two = arr2.length;

  if(one>two) return arr1;
  else if (one<two) return arr2;
  else return "equal";
}
