function tortoiseRace(array) {
  var answer = []
  array.sort(function(a, b) {
    return a - b;
  });
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    if(array[i]===3)answer.push(7);
    else if (array[i]===7)answer.push(3);
    else answer.push(array[i]);
  }

return answer
}
console.log(tortoiseRace([4, 2, 7, 5, 1, 3]));
