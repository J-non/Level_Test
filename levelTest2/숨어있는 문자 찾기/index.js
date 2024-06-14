const btn = document.querySelector("#btn");
btn.onclick = (event) => {
  let target = document.querySelector("#target").value.trim();
  let keyword = document.querySelector("#keyword").value.trim();

  console.log(target.indexOf(keyword));
}