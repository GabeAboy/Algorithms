function triangularTreasure(num){
  var str="";
  for (var i = 0; i < num; i++) {
    str+="*";
  }
  while(str){
    console.log(str);
    str = str.substr(1);
  }
}
triangularTreasure(3);
....
..
