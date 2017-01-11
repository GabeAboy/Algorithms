var o = {
  a: 1,
  b: 2,
  c: 3,
  average: function(){
    return (this.a + this.b + this.c) / 3;  
  }
};

console.log(o.average()); //doesn't work
