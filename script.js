let text = document.getElementById('text');
let atas = document.getElementById('atas');
let awan = document.getElementById('awan');
let depan = document.getElementById('depan');
let rumah = document.getElementById('rumah');
let full = document.getElementById('full');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    rumah.style.left = value * 1.5 + 'px';
    depan.style.bottom = value * -2.5 + 'px';
    awan.style.left = value * -2.5 + 'px';



});