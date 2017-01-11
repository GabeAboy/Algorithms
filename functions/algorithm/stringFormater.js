function stringFormater(arrayObj) {
  var array =[];
for (var i = 0; i < arrayObj.length; i++) {
  array.push(arrayObj[i].name);
}
var splicer = array.splice(-2).join(" & ");
var str = array.join(", ");
str+=", "+splicer;
console.log(str);
}
var arrayObj = [{name: 'Bart'},{name: 'Lisa'},
{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}];
stringFormater(arrayObj);
