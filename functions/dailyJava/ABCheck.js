/*Write a function called ABCheck that takes a string
parameter and return the string true if the characters 'a' and 'b'
 are separated by exactly 3 places anywhere in the string at least once
 (e.g. "lane borrowed" would results in true because there are exactly
 three characters between 'a' and 'b'). Otherwise return the string false.
*/
function ABCheck(str) {
  var separater = 1;
  var start = str.indexOf("a");
  var start2= str.indexOf("b");

  while (separater<=3) {
    if(start2<start){
        var n = str.charAt(start2+separater);
        if(n==="a")return false;
        separater++;
    }
    var x = str.charAt(start+separater);
    if(x==="b")return false;
    separater++;
  }
  
  return "("+str+")"+" is "+true;
}
console.log(ABCheck("lbne aorrowed"));
