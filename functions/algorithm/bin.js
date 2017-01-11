function toBinary (num) {
  var binaryNum = [];
  console.log(Math.pow(num, 0.5));
  for (var i = 0; i <= Math.pow(num, 0.5); i++) {
    if ((Math.pow(2, i) * 2) > num) {
      for (var j = i; j >= 0; j--) {
        if (Math.pow(2, j) <= num) {
          num -= Math.pow(2, j);
          binaryNum.push(1);
        } else {
          binaryNum.push(0);
        }
      }
    }
  }
  return +binaryNum.join('');
}
console.log(toBinary(3));
