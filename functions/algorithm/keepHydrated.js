function dashatize(num) {
  //get 'em
  var array = num.toString().split("");

  var length = array.length;
  for(var i =0;i<length;i++){

    if(array[i]%2===0 && array[i+1]%2===0){
      array.splice(i+2,0,'-');
      length++;
    }
    if(array[i]%2===0 && array[i+1]%2!==0){

      array.splice(i,0,'-');
      length++;
    }
    if(array[i]%2!==0 && !isNaN(array[i])){
    array.splice(i+1,0,'-');

    length++;}


  }
  return array.join("");
}

console.log(dashatize(141242141));
