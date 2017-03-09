function largestRange(array) {
  var buy=0;
  var sell=0;
  var profit=0;
  for (var i = 0; i < array.length; i++) {
    buy=array[i]
    for (var n = i+1; n < array.length; n++) {
      sell=array[n]
      if(profit<(buy-sell))profit=buy-sell

    }
  }
}
console.log(largestRange([4,7,9,1,3,20,4,65,0,23]));
