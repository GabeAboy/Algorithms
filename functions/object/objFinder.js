function objFinder(str,obj) {
  
  for(var prop in obj) {
    if(obj[prop]===str) return true;
  }
  return false;
}
var person = {name:"Gabriel",
              age:24};
console.log(objFinder("Gabriel",person));
