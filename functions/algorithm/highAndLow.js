function highAndLow(numbers){


  var arr = numbers.split(" ");
  var answer = arr.reduce(function(x,y){
    return (x>y)?x:y;
  });

  return answer;

}
console.log(highAndLow("4 5 29 -3 6 -6"));
