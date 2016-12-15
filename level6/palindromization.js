function palindromization(n,str) {
  if(str===''||n<2)return 'Error!';
  const answer = [];
  var test = ''
  var charIndex = 0;
  for (var t = 0; t < n; t++) {
    test+=str
  }
  for (let i = 0; i < n; i++) {
    //if(charIndex===3)charIndex-=2;
    if(answer.length < 2||answer.length%2===1){
      answer.splice((answer.length/2)+1,0,test.charAt(charIndex))
    }
    else {
      charIndex++;
      answer.splice((answer.length/2),0,test.charAt(charIndex));
    }
  }
  return answer.join('')
}
console.log((palindromization(10,'123')));
