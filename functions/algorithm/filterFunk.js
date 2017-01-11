function birds(bird) {
  var checker = [1,2,3];
  var filt = bird.filter(function(i){
    return checker.indexOf(i) < 0;
  });
  return filt;
}
console.log(birds([1,2,3,4,4]));
