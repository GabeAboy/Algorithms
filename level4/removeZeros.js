// function removeZero(array) {
//   var input = []
//   for (var i = 0; i < array.length; i++) {
//     if(array[i]==0){
//       input.push(array[i])
//       array.splice(i,1)
//       i--
//     }
//   }
//   var returner = array.concat(input)
//   return returner
// }
// console.log(removeZero([7,2,3,0,4,1,0,5,0,3,6,7,8,21,0]));c
//move until stop
function removeZeroString(array) {
var str = array.join(' ')
console.log(str);
str=str.replace('7','2')
console.log(str.charAt(0));
// str.charAt(0)=str.charAt(1)
// for (var i = 0; i < str.length; i++) {
//   if(str.charAt(i)!==' ' && str.charAt(i)==0){
//     var m=i
//     str = str.replace('0',st)
//     console.log(str);
//     // while (str.charAt(m)!==' ') {
//     //   console.log(str.charAt(i)+str.charAt(m));
//     //   m++
//     // }
//   }
// }
return str.split(' ')

}
console.log(removeZeroString([7,2,3,0,4,6,'0',0,13,0,78,0,0,19,14]));
