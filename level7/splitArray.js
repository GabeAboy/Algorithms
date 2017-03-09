function makeParts(arr, chunkSize) {
  var array = [];
  console.log(Math.ceil(12.3));
  console.log(Math.ceil(arr.length/chunkSize));
  const flore = Math.floor(arr.length/chunkSize)
  const ceiling = Math.ceil(arr.length/chunkSize)
  const overhead = arr.length%chunkSize
    for (var i = 0; i <= ceiling; i++) {
      if(arr.length/chunkSize>1)array.push(arr.splice(0,chunkSize))
    }
    if(arr.length)array.push(arr.splice(0,arr.length))
    return array;

}

 console.log(makeParts([1,2,3,45,6,7,2,2,3,4,5],3))
