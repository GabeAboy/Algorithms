function factorial(n) {
  console.log(n);
  return n <= 1 ? 1 : n * factorial(n-1);
}
console.log(factorial(3));
