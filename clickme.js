let btn = document.querySelector(".btn");
let menu = document.querySelector(".menu");
let scared = document.querySelector(".scared");
let ctn = document.querySelector(".ctn");
let audio = document.querySelector(".audio");
btn.addEventListener('click', () => {
    ctn.removeChild(menu);
    scared.classList.remove("scared-2");
    audio.play();
})