/*
// Given an arbitrary input string, return the first
 non-repeated character in the string. For example:
//firstNonRepeatedCharacter('ABA'); //=> 'B'
//firstNonRepeatedCharacter('AABCABD'); // => 'C'*/
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}
console.log(firstNonRepeatedCharacter("AABCABDCFE"));
