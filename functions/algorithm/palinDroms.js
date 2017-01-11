function paladinDrom(str){

var x  = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
var n = x.split("").reverse();
var reverseString = n.join("");

if(x == reverseString)return true;
else return false;

}
console.log(paladinDrom("never odd $%#or even"));
