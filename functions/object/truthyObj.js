function truthyObject(obj) {
  for(var prop in obj){
    if(obj[prop]===0||
      obj[prop]===undefined||
      obj[prop]===null||
      obj[prop]===false||
      obj[prop]===isNaN||
      obj[prop]==="") delete obj[prop];
  }
  return obj;
}
var person = {name:"Gabe",age:24,gender:""};
console.log(truthyObject(person));
