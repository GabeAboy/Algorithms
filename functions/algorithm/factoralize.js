/*Recursion-function that calls itself
5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120

*/
function factorThis(num){

  if (num < 0) return -1;

   // If the number is 0, its factorial is 1.
   else if (num === 0) return 1; 

   // Otherwise, call the recursive procedure again
     else {
        return (num * factorThis(num - 1));

}}
console.log(factorThis(4));


/*WhileLoop

function factorThis(num){
  var local = 1;
  while (num!==0) {
    local*=num;
    num--;
  }
  return local;
}
console.log(factorThis(3));// should return 6


*/


/*ForLoop

function factorThis(num){
  var local = num;
  for (var i = 0; i < num; i++) {
  num*=local-1;
  return num;
}
}
console.log(factorThis(3));

*/
