// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities.
//But he just can't stop solving all the kata!!
//
// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
//
// kata = 5 Petes kata = 10 life = 0 eating = 1
//
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:
//
// <40 = 'Super happy!'
// <70 >=40 = 'Happy!'
// <100 >=70 = 'Sad!'
// >=100 = 'Miserable!'

function paul(arr) {
  var array = arr.map(function(a) {
    if (a ==='eating')return 1
    else if (a ==='Petes kata')return 10
    else if(a==='kata')return 5
    else return 0
  })

  var sum = array.reduce(function(a,b) {
    return a+b
}, 0);
if(sum<40)return 'Super happy!'
else if(sum<70&&sum>=40)return 'Happy!'
else if(sum<100 && sum>=70)return 'Sad!'
else return 'Miserable!'
}
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']))
