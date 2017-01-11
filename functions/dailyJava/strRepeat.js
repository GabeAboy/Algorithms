// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.
// doubleChar("String") ==> "SSttrriinngg"
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
  var arr = str.split("");
  var ret="";
  for (var i = 0; i < arr.length; i++) {
    for (var n = 0; n < 2; n++) {
      ret+=arr[i];
    }
  }
  return arr;
}
console.log(doubleChar("String"));

// function doubler(str) {
//     strArr = str.split('');
//     for(var i = 0; i < strArr.length; i++) {
//         strArr[i] += strArr[i];
//     }
//     return strArr.join('');
// }
