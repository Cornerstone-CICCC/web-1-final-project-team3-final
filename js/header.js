const hamburger = document.querySelector('.hamburger');
const hamburger_menu = document.querySelector('.hamburger_menu');

hamburger.addEventListener('click', () => {
    hamburger_menu.classList.toggle('show');
    hamburger.classList.toggle('active');
    body.classList.toggle("burgerOpen");
});

window.addEventListener("scroll", function(event) {
    if(window.scrollY == 0) {
        body.classList.remove("scroll");
    } else {
        body.classList.add("scroll");
    }
})