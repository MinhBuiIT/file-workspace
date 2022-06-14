const img = document.querySelectorAll('.img');
[...img].forEach((item) => item.addEventListener('click',handlesLightbox));
function handlesLightbox(e,linkimg) {
    linkimg = e.target.getAttribute('src');
    const template = `<div class="lightbox">
    <div class="lightbox-content">
        <ion-icon class="icon-left" name="chevron-back-outline"></ion-icon>
        <img src="${linkimg}" alt="" class="lightbox-img">
        <ion-icon class="icon-right" name="chevron-forward-outline"></ion-icon>
    </div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin',template);
}
let i;
document.body.addEventListener('click',function(e) {
    if(e.target.matches('.lightbox')) {
        e.target.parentNode.removeChild(e.target);
    }
    if(e.target.matches('.icon-right')) {
        let previousIconRight = e.target.previousElementSibling;
        i = [...img].findIndex((item) => previousIconRight.getAttribute('src') === item.getAttribute('src'));
        i++;
        if(i>[...img].length-1) {
            i=0;
        }
        let newLink = [...img][i].getAttribute('src');
        previousIconRight.setAttribute('src',newLink);
    }
    if(e.target.matches('.icon-left')) {
        let nextIconLeft = e.target.nextElementSibling;
        i = [...img].findIndex((item) => nextIconLeft.getAttribute('src') === item.getAttribute('src'));
        i--;
        if(i<0) {
            i=[...img].length-1;
        }
        let newLink = [...img][i].getAttribute('src');
        nextIconLeft.setAttribute('src',newLink);
    }
});
