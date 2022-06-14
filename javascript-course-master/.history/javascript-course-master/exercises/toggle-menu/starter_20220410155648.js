const menuToggle  = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click',function() {
    menu.classList.toggle('is-show');
    menuToggle.classList.toggle('fa-bars');
    menuToggle.classList.toggle('fa-times');
})
document.addEventListener('click',function(event) {
    console.log(event.target);
    if(!menu.contains(event.target) && !menuToggle.matches(event.target)) {
        menu.classList.remove('is-show');
        menuToggle.classList.add('fa-bars');
        menuToggle.classList.remove('fa-times');
    }
})