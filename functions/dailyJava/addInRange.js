/*Write a range function that takes two arguments,
 start and end, takes in an incrementor if not defined defaults to 1

return sum of array
*/
 function makeInRange(first,last,inc) {
   var array = [];
   if(inc===undefined)inc=1;
   if(inc>=1){
     for (first; first <= last; first+=inc) {
        array.push(first);
       }
       return(array);
   }

   for (first; first >= last; first+=inc) {
      array.push(first);
     }
     return(array);
}
function sumArr(array) {
  var sum=0;
  for (var i = 0; i < array.length; i++) {
    sum+=array[i];
  }
  return sum;
}
console.log(sumArr(makeInRange(1,10)));
// console.log(sumArr(makeInRange(5,2,-1)));
// console.log(sumArr(makeInRange(1,10,2)));
