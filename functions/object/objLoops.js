function unknownPerson(obj) {
  for(var prop in obj) {
    obj[prop]="Unknown";
  }
  return obj;
}
var person = {name:"Gabe",age:24,gender:"M"};
console.log(unknownPerson(person));
