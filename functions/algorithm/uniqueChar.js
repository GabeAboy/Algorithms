/*
Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
Helpful methods:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));
//take out all repeated letters
*/
function unique_char(comp) {
   var str = "";
  // var count = {};
  // for (var i = 0; i < comp.length; i++) {
  //   var n = comp.charAt(i);
  //   if(!count.hasOwnProperty(n)){
  //     count[n] = 1;
  //   }
  // }
  // for (var variable in count) {
  //     str+=variable;
  // }
  // return str;
  for (var i = 0; i < comp.length; i++) {
    if(str.indexOf(comp.charAt(i))===-1)str= str+comp[i];
  }
  return str;
}

console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));
