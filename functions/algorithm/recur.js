function exponentRecur(base,expo) {
  if(expo===0)return 1;
  else return (base * exponentRecur(base,expo-1));
}
console.log(exponentRecur(2,3));
//2*2=4*2=8
