//Math.pow(base,exponent);

function mathPow(base,expo){
  var ans = base;
  if(expo<1)return base;
  if(expo===0)return 1;

  for (var i = 1; i < expo; i++) {
    ans*=base;} return ans;
}

console.log(mathPow(2,3));
console.log(Math.pow(2,3));
