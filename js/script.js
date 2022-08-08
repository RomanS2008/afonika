let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

})

let close = document.querySelector('.menu__close');

close.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    menu.classList.remove('active');
})

document.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape'){
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    }
})