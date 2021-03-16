let btn = document.querySelector(".btn");
let menu = document.querySelector(".menu");
let scared = document.querySelector(".scared");
let ctn = document.querySelector(".ctn");
let audio = document.querySelector(".audio");
let par = document.createElement("p");
let btnTwo = document.querySelector(".btn2");

btnTwo.addEventListener('click', () => {
    scared.appendChild(par);
    par.innerHTML = "DALBANMISAN BUNI BOSSA O'CHMAYDIKU🤣🤣🤣";
    par.classList.add("par");
})

btn.addEventListener('click', () => {
    ctn.removeChild(menu);
    scared.classList.remove("scared-2");
    audio.play();
})