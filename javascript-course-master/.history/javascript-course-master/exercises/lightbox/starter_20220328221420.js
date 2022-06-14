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
    if(event.target.matches('.lightbox')) {
        event.target.parentNode.removeChild(event.target);
    }
})