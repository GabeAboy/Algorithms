function sumRange(one,two) {
//input the range in array
var array = [];
var sum=0;var forNum;
if(one===two)return one;
else if(one<two){
  if(one<0)forNum = ((-one)+two);
  else forNum = one+two;
   for (forNum; forNum!==one; one++) {
     array.push(one);
   }
}
else if(one>two){
  if(one<0)forNum = ((-one)+two);
  else forNum = one+two;
   for (forNum; forNum!==two; two++) {
     array.push(two);
   }
}
  array.forEach(function(i) {
    sum+=i;
});

  return array;
}
console.log(sumRange(7,8));//
//-1+0+1+2=2
