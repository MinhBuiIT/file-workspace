/**
 *     <div class="lighbox">
        <div class="lighbox-wrap">
            <img src="https://images.unsplash.com/photo-1649576360683-7fa01850f9d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Photo" class="lightbox-img">
        </div>
    </div>
 */
const imgs = document.querySelectorAll('.main img');
[...imgs].forEach(item => item.addEventListener('click',function(event) {
    let linkImg = event.target.getAttribute('src');
    const template = `<div class="lighbox">
    <div class="lighbox-wrap">
        <i class="fa fa-angle-left icon-left"></i>
        <img src="${linkImg}" alt="Photo" class="lightbox-img">
        <i class="fa fa-angle-right icon-right"></i>
    </div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin',template);
}))
document.body.addEventListener('click', function(event) {
    const lightboxImg = document.querySelector('.lightbox-img');
    if(!lightboxImg) return;
    let index = [...imgs].findIndex(item => item.getAttribute('src') === lightboxImg.getAttribute('src'));
    if(event.target.matches('.lighbox')) {
        event.target.parentNode.removeChild(event.target);
    }
    if(event.target.matches('.icon-right')) {
        index++;
        if(index >= imgs.length) index = 0;
        setNewLink(imgs,lightboxImg,index);
    }
    if(event.target.matches('.icon-left')) {
        index--;
        if(index < 0) index = imgs.length - 1;
        setNewLink(imgs,lightboxImg,index);
    }
})
function setNewLink(imgs,lightImg,index) {
    let linkNew = [...imgs][index].getAttribute('src');
    lightImg.setAttribute('src',linkNew);
}