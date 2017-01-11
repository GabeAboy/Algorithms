//Cipher takes a string and manipulates it
//returning a string each letter num characters
//down
function cipher(num,str) {
  var string="";
  if(num===0)return str;
  for (var i = 0; i < str.length; i++) {
      var x = str.charCodeAt(i);
      //-5
      var tooLow = x-num;
      if(tooLow<=97){
        var what = 97-tooLow;
        var  j= String.fromCharCode(123-what);
        string+=j;
      }
      else{
          var n = String.fromCharCode(x-num);
          string+=n;
      }
  }
  return string;
}
console.log(cipher(5,"hey"));
