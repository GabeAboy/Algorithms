//check all numbers from 2 to length -1 .. if it can mod to 0
//2, 3, 5, 7, 11, 13, 17, 19
//9 // 3
//1,4,6,8
//2.3.4.5.6.7.8
function isPrime(array) {
  var prime = [];
  for (var i = 0; i < array.length; i++) {//gets each number to check
    for (var n = 2; n < array[i]-1; n++) {//checks the rules for prime
      if(array[i]%n!==0)prime.push(array[i]);
    }
  }

  return prime;
}
function arr(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(isPrime([1,2,3,4,5,6,7]));
