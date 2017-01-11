//takes a two strings
//checks how many combinations of letters ar in the next strings
//abccdefgdfgf abcdfsdefgsdfgf (abc def gf) three palindroms
function checker(str1,str2) {
    var array=[];
    var arr1 = str1.split(""),arr2 = str2.split("");
    for (var i = 0; i < arr1.length; i++) {
      var count=0;
      if(arr1[i]===arr2[i])count++;
      if(count>=2){
        


      }
    }
    console.log(arr1);
    console.log(arr2);

}
console.log(checker("abccdefgdfgfsge","abcdfsdefgsdfgf"));
