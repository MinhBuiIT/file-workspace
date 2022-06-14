/***
 * 
 */
const img = document.querySelectorAll('.content img');
[...img].forEach(item => item.addEventListener('click',function(event) {
    let src = event.target.getAttribute('src');
    const template = `<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left icon-left"></i>
    <img src="${src}" alt="" class="lightbox-img">
    <i class="fa fa-angle-right icon-right"></i>
    </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend',template);
}))
let index = 0;
document.addEventListener('click',function(event) {
    const lightBoxImg = document.querySelector('.lightbox-img');
    if(event.target.matches('.lightbox')) {
        event.target.parentNode.removeChild(event.target);
    }
    index = [...img].findIndex(item => item.getAttribute('src') == event.target.getAttribute('src'));
    if(event.target.matches('.icon-right')) {
        index++;
        console.log(index);
        // if(index >= [...img].length) index=0;
        const newSrc = [...img][index].getAttribute('src');
        lightBoxImg.setAttribute('src',newSrc);
    }
})