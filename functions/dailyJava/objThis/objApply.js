// function func(arg1, arg2) {
//         console.log(this); // a
//         console.log(arg1); // b
//         console.log(arg2); // c
// }
//
// func.apply('a', ['b', 'c'])
////PROP 2
// function func(arg1, arg2) {
//         console.log(this); // a
//         console.log(arg1); // b
//         console.log(arg2); // c
// }
//
// var ayy = {name:"a"};
// var beecee = ['b', 'c']
// func.apply(ayy,beecee)
////PROB 3
// function average() {
//      return (this.x + this.y) / 2;
// }
// var obj = {x:4,y:4};
// average.apply(obj);
