const menuToggle  = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click',function() {
    menu.classList.add('is-show');
    menuToggle.classList.toggle('fa-bars');
    menuToggle.classList.toggle('fa-times');
})