var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]
/*var x = +"1000";
console.log(typeof x);
*/
var arrN = (numbersArr(numbers));
console.log(arrN);
console.log(addTen(arrN));

function numbersArr(arr) {
  var arrN = [];
  for (var i = 0; i < numbers.length; i++) {
    var x = + numbers[i];
    arrN.push(x);}
  return arrN;}

function addTen(arrN) {
  for (var i = 0; i < arrN.length; i++) {
    arrN[i]+=10;}
return arrN;}
