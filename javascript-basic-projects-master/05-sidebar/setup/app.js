const hambuger = document.querySelector('.btn-hambuger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.icon-close');
hambuger.addEventListener('click',function(e) {
    menu.classList.toggle('shown');
})
close.addEventListener('click',function() {
    menu.classList.remove('shown');
})
document.addEventListener('click',function(e) {
    if(!menu.contains(e.target) && !e.target.matches('.btn-hambuger')) {
        menu.classList.remove('shown');
    }
})