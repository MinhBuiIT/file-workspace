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
document.addEventListener('click',function(event) {
    const lightBoxImg = document.querySelector('.lightbox-img');
    const lightBoxImgSrc = lightBoxImg.getAttribute('src');
    if(!lightBoxImgSrc) return;
    if(event.target.matches('.lightbox')) {
        event.target.parentNode.removeChild(event.target);
    }
    let index = [...img].findIndex(item => item.getAttribute('src') === lightBoxImgSrc);
    if(event.target.matches('.icon-right')) {
        index++;
        if(index >= [...img].length) index = 0;
        pushSrcNex(lightBoxImg,index);
    }
    if(event.target.matches('.icon-left')) {
        index--;
        if(index <0) index = [...img].length-1;
        pushSrcNex(lightBoxImg,index);
    }
})
function  pushSrcNex(lightBoxImg,index) {
    const newSrc = [...img][index].getAttribute('src');
    lightBoxImg.setAttribute('src',newSrc);
}