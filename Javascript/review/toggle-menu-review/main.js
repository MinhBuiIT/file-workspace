const hambuger = document.querySelector('.hambuger');
const menu = document.querySelector('.menu');
// const link = document.querySelector('.link');
hambuger.addEventListener('click',function(e) {
    menu.classList.toggle('is-shown');
    if(hambuger.getAttribute('name') !== 'close-outline') {
        hambuger.setAttribute('name','close-outline')
    }else {
        hambuger.setAttribute('name','menu-outline')
    }
})
document.body.addEventListener('click',(e) => {
    console.log(e.target);
    if(!menu.contains(e.target) && !e.target.matches('.hambuger')) {
        menu.classList.remove('is-shown');
        hambuger.setAttribute('name','menu-outline')
    }
})
