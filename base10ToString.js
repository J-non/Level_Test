const binaryArr = [];
function base10ToString(n) {
  if (n === 0) {
    binaryArr.push(0);
    return parseInt(binaryArr.join(""));
  }
  base10ToString(Math.floor(n / 2));
  binaryArr.push(n % 2);
  return parseInt(binaryArr.join(""));
}

console.log(base10ToString(100));