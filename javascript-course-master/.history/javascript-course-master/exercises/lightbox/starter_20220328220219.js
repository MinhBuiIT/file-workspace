/***
 * 
 */
const img = document.querySelectorAll('.content img');
[...img].forEach(item => item.addEventListener('click',function(event) {
    let src = event.target.getAttribute('src');
    const template = `<div class="lightbox">
    <div class="lightbox-content">
    <img src="${src}" alt="" class="lightbox-img">
    </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend',template);
    
}))