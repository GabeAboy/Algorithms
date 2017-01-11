function areSquare(arr) {
  if(arr.length===0)return undefined
  const newarr = []
  for (var i = 0; i < arr.length; i++) {
    for (var n = 0; n < arr[i].length; n++) {
      newarr.push(arr[i][n]);
    }
  }
  for (var z = 0; z < newarr.length; z++) {
    if(Math.sqrt(newarr[z])%1!==0)return false

  }
  return true


}
console.log(areSquare([1, 4, 9,[16,81,[85]], 54, 85]));
