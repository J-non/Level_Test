function isPrime(n) {
  if (n === 2) return true;
  let n2 = Math.sqrt(n);
  if (n === 3) {
    n2 = 3;
  }
  for (let i = 2; i <= n2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(31))
console.log(isPrime(10))
console.log(isPrime(25))