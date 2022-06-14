const hambuger = document.querySelector('.icon');
const menu = document.querySelector('.menu');

hambuger.addEventListener('click',handleMenu);
function handleMenu(event) {
    menu.classList.toggle('is-shown');
    event.target.classList.toggle('fa-times');
    event.target.classList.toggle('fa-bars');
}
document.addEventListener('click',handleOutMenu);
function handleOutMenu(event) {
    if(!menu.contains(event.target) && !event.target.matches('.icon')) {
        menu.classList.remove('is-shown');
        hambuger.classList.remove('fa-times');
        hambuger.classList.add('fa-bars');
    }
}