//Explicit
function add(){
	this.count++;
}
var counter = {
    count: 0
};
var counter2 = {
    count: 0
};
var counter3 = {
    count: 0
};
var aC1 = add.bind(counter);

aC1();
aC1();
var aC2 =add.bind(counter2);
aC2();
var aC3 =add.bind(counter3);
aC3();
console.log(counter);
// // PROB 2

//Explicit
// function callIt(func) {
// 	 func();
// }
// var counter = {
//         count: 0,
//         // Sloppy-mode method
//         inc: function () {
//             this.count++;
//         }
// }
// var x =counter.inc.bind(counter);
// callIt(x);
// console.log(counter.count); // 0
// console.log(count);  // NaN
//PROB 33
// <button id="btn" type="button">Get the car's brand</button>

// var car = {
//   brand: "Nissan",
//   getBrand: function(){
//     console.log(this.brand);
//   }
// };
//
// var el = document.getElementById("btn");
// var x = car.getBrand.bind(car);
// el.addEventListener("click", x);
