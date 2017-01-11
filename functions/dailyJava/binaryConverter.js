//Binary converter without Math.pow!!!
function binaryConvert(str) {
  var arr = str.split("").reverse();
  var count = 0;
  var skipper = 2;
  var num =0;

  for (var i = 0; i < arr.length; i++) {
    if(arr[i]==="1"){
      if(i===0)num++;
      else{
        var x=1;
        for (var n = 0; n < count; n++) {
          x*=skipper;
        }
      num+=x;
      }
    }
    count++;
  }
  return num;
}
console.log(binaryConvert("101"));//5
//0 0 0 1
