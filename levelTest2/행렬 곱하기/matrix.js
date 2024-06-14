let a = [
  [1, 2],
  [2, 4]
];
let b = [
  [1, 0],
  [0, 3]
];

let matrixMultply = (a, b) => {
  if (a[0].length !== b.length) return -1;
  let answer = [];
  let temp = [];
  temp[0] = (a[0][0] * b[0][0]) + (a[0][1] * b[1][0]);
  temp[1] = (a[0][0] * b[0][1]) + (a[0][1] * b[1][1]);
  answer.push(temp)
  temp = [];
  temp[0] = (a[1][0] * b[0][0]) + (a[1][1] * b[1][0]);
  temp[1] = (a[1][0] * b[0][1]) + (a[1][1] * b[1][1]);
  answer.push(temp)
  return answer;
}

console.log(matrixMultply(a, b));