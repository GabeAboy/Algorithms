function findInArray(arr,value) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]!==value&&i===arr.length-1) return false;
    if(arr[i]==value)return true;
    //else return false;
  }
}
console.log(findInArray([1,2,3,4,5],4));
