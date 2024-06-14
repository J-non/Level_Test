let scoreArr = [];
const btn = document.querySelector("#btn");

let count = 0;
let count2 = 0;
function countCandy(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (count2 === 3) return count + count2;
    if (arr[i] === arr[i - 1]) {
      count++;
      continue;
    }
    count2++
  }
  return count + count2;
}

btn.onclick = (event) => {
  count = 0;
  count2 = 0;
  const scoreInput = document.querySelector("#scoreInput").value.trim();
  scoreArr = scoreInput.split(" ").map(Number);
  console.log(countCandy(scoreArr.sort()));
}