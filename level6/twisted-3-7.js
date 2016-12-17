function tortoiseRace(array) {
  var answer = []
  arr = array.slice();
  var thirteen = arr.indexOf(13)

  if(arr.indexOf(3)!=-1||arr.indexOf(7)!=-1){
    arr.sort(function(a, b) {
      return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]===3)answer.push(7);
      else if (arr[i]===7)answer.push(3);
      else answer.push(arr[i]);
    }
  }
  if(thirteen>-1){
    console.log('enter');
    arr[thirteen]=17
    arr.sort(function(a, b) {
      return a - b;
    });
    arr[arr.indexOf(17)]=13
    answer = arr
  }

return answer
}
// tortoiseRace([12,13,14]);
console.log(tortoiseRace([9,2,4,7,3]));
