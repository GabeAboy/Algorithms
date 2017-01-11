// This time no story, no theory.
//The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  var answer=[];
  for (var i = 0; i < s.length; i++) {
    for (var n = 0; n <= i; n++) {
      var x = s.charAt(i).toUpperCase();
      if(n===0)answer.push(x);
      else answer.push(s.charAt(i));
      if(n===i && i!==s.length)answer.push("-");
    }
  }
  answer.splice(-1);
  var input = answer.join("");
  return input;
}
console.log(accum("abcd"));
