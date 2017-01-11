
var countTre = 0;
var countFiv = 0;
var countBth = 0;
for(var i = 1;i<=100;i++){
  if(i%3===0 && i%5===0)countBth++; console.log("FizzBuzz");
  if(i%3===0)countTre++; console.log("Fizz");
  if(i%5===0)countFiv++; console.log("Buzz");
}
console.log("%3: "+countTre);
console.log("%5: "+countFiv);
console.log("%3,5: "+countBth);
