
function finder(str ,arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]===str)count++;
  }

  if(count>=1)return count+ " " +true;
  return false;
}
console.log(finder("gabriel",["gabriel","gabriel","no",3,4]));
