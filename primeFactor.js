function primeFactor(n) {
  const factorArr = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      factorArr.push(i);
    }
  }

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

  const primeFactorArr = [];
  for (let i = 0; i < factorArr.length; i++) {
    if (isPrime(factorArr[i])) {
      primeFactorArr.push(factorArr[i]);
    }
  }
  return primeFactorArr;
}
console.log(primeFactor(131313));