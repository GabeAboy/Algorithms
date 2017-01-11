 var arrd = [ 'alice', 'bob', 'charlie', 'bob', 'danielle', 'tester', 'tester' ];//g,a,b
 console.log(arrd);

var arr = [];
arrd.forEach(function(item) {
  console.log(item);
  if(arr.indexOf(item) === -1) {
    arr.push(item);
  }
});
console.log(arr);
