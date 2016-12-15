function sum(height) {
  if(height < 0)return 0
  var arr = [];
  var v = 0;
  for (var i = 1; i <= height; i++) {
    for (var n = 1; n <= i; n++) {
      v++;
      if(n===i){
        arr.push(v);
      }
    }
  }
  return arr.reduce((e,b) => {
    return e+b
  });
}
console.log(sum(5));
