//Making a calculator module that uses closures

function calc() {
  var num = 0;
  return {
    add: function(number){
      num+=number;
      return num;
    },
    sub: function(number){
      num-=number;
      return num;
    },
    mult: function(number){
      num*=number;
      return num;
    },
    div: function(number){
      num/=number;
      return num;
    },
    clear: function(){
      num=0;
      return num;
    },
  };
}
var calculator = calc();

console.log(calculator.add(2));
console.log(calculator.mult(10));
console.log(calculator.sub(4));
console.log(calculator.clear());
