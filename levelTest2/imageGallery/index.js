const imgs = document.querySelectorAll(".imgs");

for (const img of imgs) {
  img.onclick = (e) => {
    let modalWrap = document.querySelector(".modal-wrap");
    modalWrap.classList.add("on");
    let currentImg = document.querySelector("#currentImg");
    currentImg.src = e.target.src;
  }
}

let modalBackground = document.querySelector(".modal-background");
modalBackground.onclick = (e) => {
  let modalWrap = document.querySelector(".modal-wrap");
  modalWrap.classList.remove("on");
}