var greet = "Hey";

function sayGreeting(greeting) {
  var g = greeting;
  return function sayGreeting2(name){

    console.log(g + name);
  };
}
var name = " Gabriel";
// var greeting = "Hey ";
var greeting = sayGreeting(greet);
function hey(name,cb) {
  cb(name);

}
hey(name,greeting);
