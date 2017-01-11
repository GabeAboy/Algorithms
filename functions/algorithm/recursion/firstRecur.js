// let countdown = (num) => {
//fibo
function countdown(n) {
  console.log(n);
  countdown(n-1)
  // if(n<2)return n;
  // else return (countdown(n-1)+countdown(n-2));
}
console.log(countdown(10));
