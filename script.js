// Hamburger Menu 
//Adding hamburger
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

//Removing hamburger
const close = document.getElementById('close');

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}