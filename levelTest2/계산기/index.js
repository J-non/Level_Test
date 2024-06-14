const numbers = document.querySelectorAll(".number");

for (const iterator of numbers) {
  iterator.onclick = (e) => {
    let result = document.querySelector(".result");
    result.innerHTML += e.target.innerHTML;
  }
}

const zero = document.querySelector(".zero");
zero.onclick = (e) => {
  let result = document.querySelector(".result");
  result.innerHTML += e.target.innerHTML;
}

const symbols = document.querySelectorAll(".symbol");

for (const iterator of symbols) {
  iterator.onclick = (e) => {
    if (iterator.innerHTML === "&nbsp;=&nbsp;") {
      let result = document.querySelector(".result");
      let temp = result.innerHTML;
      temp = temp.split("&nbsp;");
      let temp2 = parseInt(temp);
      console.log(temp2)
      for (let i = 0; i < temp.length; i++) {
        if (isNaN(temp[i])) {
          switch (temp[i]) {
            case "+":
              result.innerHTML = parseInt(temp[i - 1]) + parseInt(temp[i + 1]);
              break;
            case "-":
              result.innerHTML = parseInt(temp[i - 1]) - parseInt(temp[i + 1]);
              break;
            case "x":
              result.innerHTML = parseInt(temp[i - 1]) * parseInt(temp[i + 1]);
              break;
            case "/":
              result.innerHTML = parseInt(temp[i - 1]) / parseInt(temp[i + 1]);
              break;
          }
        }
      }
      return;
    }
    let result = document.querySelector(".result");
    result.innerHTML += e.target.innerHTML;
  }
}

const ac = document.querySelector(".ac");
ac.onclick = (e) => {
  let result = document.querySelector(".result");
  result.innerHTML = "";
}