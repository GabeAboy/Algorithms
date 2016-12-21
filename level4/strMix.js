function stringMix(s1, s2) {
  let s1Obj = stringCounter(s1);
  let s2Obj = stringCounter(s2);
  // let eachVal = [];
  function stringCounter(str) {
    let obj = {};
    for (var i = 0; i < str.length; i++) {
      let val = str.charAt(i);
      // if(!(val in eachVal))eachVal.push(val)
      if(/[a-z]/.test(val)){
        if(val in obj)obj[val]+=val
        else obj[val]=val
      }
    }
    for (var variable in obj) {
      if (obj[variable].length<=1) delete obj[variable]
    }
    return obj
  }
 setWinner()
  function setWinner() {
    console.log('ent');
    var getMax = function() {
      let s1=0,s2 = 0
      for (var variable in s1Obj)s1++
      for (var variable in s2Obj)s2++
      if(s1<s2)return 1
      else return 0
    }

    if (getMax()===1) {
      for (var variable in s2Obj) {
        if (s1Obj.hasOwnProperty(variable)) {

        }
      }
    }
    else{
      for (var variable in s1Obj) {
        if (s2Obj.hasOwnProperty(variable)) {
          console.log('loop s1');
        }
      }
    }
  }

  console.log(s1Obj,s2Obj);
  return false
}
console.log(stringMix("A aaaa bb c","& aaa bbb cc d"));
