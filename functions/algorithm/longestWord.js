//return the longest word in a string

//.length, .split

function longestWord(str) {

  var strSplit = str.split(" ");
  var ard = [];
  var place;
  for (var i = 0; i < strSplit.length; i++) {
    ard.push(strSplit[i].length);
    ard.sort();
    ard.reverse();
    place = ard[0];
  }

  function isBigEnough(value){


    return value >=7;
  }
  var filtered = [7,3,4,10].filter(isBigEnough);

  //strSplit.pop();

  return filtered;

  /*

  function isBigEnough(value) {
    return value >= 10;
  }

  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);


  // filtered is [12, 130, 44]
  ------
  //console.log(strSplit[2]);
  for (var i = 0; i < strSplit.length; i++) {
      //if(strSplit.length===1) return true;
        if(strSplit[0].length<strSplit[1].length){
          strSplit.splice(0,1);
        }
        else {
          strSplit.splice(1,1);
        }


  }

  */
  //function filter

}
console.log(longestWord("Hey asd a d johnas!"));
