const hamburger = document.querySelector('.hamburger');
const hamburger_menu = document.querySelector('.hamburger_menu');

hamburger.addEventListener('click', () => {
    hamburger_menu.classList.toggle('show');
    hamburger.classList.toggle('active');
});