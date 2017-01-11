function binaryAdd(num1) {
  var pow=0;
  var answer = "";
  var count =0;
  var arr = [];
  while(pow<=num1){
      pow = Math.pow(2,count);
      if(pow<=num1){
        arr.push(pow);
      }
      count++;
    }
    arr.reverse();
    console.log(arr);
    var i = 0;
    while(answer.length!==arr.length){
      var ele = arr[i];
      var check = num1 - ele;
      if(ele>=0){
        answer+="1";
        num1-=ele;
        arr.shift();
      }
      else answer+="0";
      i++;
    }
  // for (var i = 0; i < arr.length; i++) {
  //   var ele = arr[i];
  //   var check = num1 - ele;
  //   if(check>=0){
  //     answer+="1";
  //     num1-=ele;
  //     arr.shift();
  //   }
  //   else answer+="0";
  // }
  //
  return answer;

}
console.log(binaryAdd(2));
