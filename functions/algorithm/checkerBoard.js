
//when the number is even print #
var black = "#";
var space = " ";
var complete = "";
for(var i = 1;i<8;i++){
  for(var n = 0; n<8;n++){
    if(i%2===0){
      if(n%2===0)complete+=black;
      else complete+=space;
    }
    else{
      if(n%2===0)complete+=space;
      else complete+=black;
    }
  }
  complete+="\n";
}
console.log(complete);
