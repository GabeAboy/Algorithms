function inArray(array1,array2){
  //...
  const r = []
  for (var i = 0; i < array1.length; i++) {
    for (var z = 0; z < array2.length; z++) {
      if(array2[z].indexOf(array1[i])>-1 && r.indexOf(array1[i])<0)r.push(array1[i]);
    }
  }
  return r.sort()
}
console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));
