// function func(arg1, arg2) {
//
//         console.log(this.a); // a
//         console.log(arg1); // b
//         console.log(arg2); // c
// }
//
// func.call({a:'a'}, 'b', 'c');
//***********PROB 2
// function func(arg1, arg2) {
//         console.log(this.name); // a
//         console.log(arg1); // b
//         console.log(arg2); // c
// }
//
// var ayy = 'a'
// var bee = 'b'
// var cee = 'c'
// func.call({name:ayy},bee,cee);
//***********PROP 3
//function arument keyword!!<3
// function average() {
//      return (this.x + this.y) / 2;
// }
// var addobj={x:8,y:10 };
// average.call(addobj);
////
// function average() {
// 	 console.log("args: ",this,one,two);
//      return (this.x + this.y) / 2;
// }
// var anObj={x:8,y:10 };
// average.call(anObj,anObj.x,anObj.y);
