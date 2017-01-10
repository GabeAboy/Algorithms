function findUniq(arr) {
  // do magic
  let uniqString;
  for (var n = 0; n < arr.length; n++) {
    let arrD = arr[n]
    for (var i = 0; i < arr[0].length; i++) {
      let check = arr[0].charAt(i)
      if(arrD.indexOf(check.toUpperCase())<0||arrD.indexOf(check.toLowerCase())<0){
        return uniqString=arrD

      }
    }
  }
return 'ALL THE SAME'
}

  console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));
