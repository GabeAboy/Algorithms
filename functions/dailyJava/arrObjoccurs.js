//Counts all the elements in the array into an object
//then finds # that occurs in the array an even amount of times
var onlyEven = [1,6,2,4,4,5,6,8,9,6];
console.log(firstEven(count(onlyEven)));
function count(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    var x = array[i];
    if(!obj.hasOwnProperty(x))obj[x]=1;
    else{obj[x]++;}
  }
  return obj;
}
function firstEven(obj){
  for(var prop in obj) {
    if(obj[prop]%2===0)return prop +" occurs "+obj[prop]+ " times";
  }
  return "No even occurrences available";
}
