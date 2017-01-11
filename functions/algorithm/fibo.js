function fibo(n) {

  var array = [0,1];
  var ans = 0;
  for (var i = 0; i < n-2; i++) {
    ans = array[i]+array[i+1];
    array.push(ans);
  }
  if(n===1)return [0];
  if(n<1)return [];
  return array;
}
console.log(fibo(11));
