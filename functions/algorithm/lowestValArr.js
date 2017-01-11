function findSmallestInt(args){
  return Math.min.apply(null, args);
}
console.log(findSmallestInt([34, -345, -1, 100,-1000]));
