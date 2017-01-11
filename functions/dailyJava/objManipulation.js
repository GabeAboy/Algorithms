//create a function that takes an array of objects as an argument and a string that represents
//a property of an object contained in the array and returns an object
//whose keys are the properties and whose values are arrays of objects that match that property.

var arr = [
    {name: 'Joe Montana', team: '49ers'},
    {name: 'Jerry Rice', team: '49ers'},
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];
var obj={};
for (var i = 0; i < arr.length; i++) {
  var array=[];
  if(!obj.hasOwnProperty(arr[i].team)){
    array.push(arr[i].name);
    obj[arr[i].team] = array;
  }
  else if(obj.hasOwnProperty(arr[i].team)){
    obj[arr[i].team].push(arr[i].name);
  }
}
console.log(obj);
