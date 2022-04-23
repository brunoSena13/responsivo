'use strict';

const btn = document.querySelector("#btn");

function ativarMenu(){
    const nav = document.querySelector("nav");
    nav.classList.toggle('active');
    if(nav.className == 'active'){
        document.querySelector('.icon').src = "close.svg";
    }else{
        document.querySelector('.icon').src = "menu.svg";
    }
}

btn.addEventListener("click", ativarMenu);
