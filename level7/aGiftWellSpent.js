/*function that takes in a $ amount and a list of items
and returns the index of each item that adds up to the price
[0,3] < [1,2]
*/
function WellSpent(total,array) {
  let complete = 0;
  let PossibleTotals = []
  let zero;
  let tone;
    for (var i = 0; i < array.length; i++) {
      if(array[i]<total&& !zero)zero=array[i]
      else if(array[i]+zero===total)tone = array[i]
    }
    return [array.indexOf(zero),array.indexOf(tone)]
}
console.log(WellSpent(5,[5,2,3,4,5]));
