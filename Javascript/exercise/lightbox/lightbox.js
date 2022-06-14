const img = document.querySelectorAll('.content img');//truy vấn tới các img trong content
[...img].forEach((item) => item.addEventListener('click',handleImg));
function handleImg(event) {
    const template = `<div class="lightbox">
    <div class="lightbox-wrap">
        <i class="fa fa-angle-left icon-left"></i>
        <img src="${event.target.getAttribute('src')}" alt="" class="lightbox-img">
        <i class="fa fa-angle-right icon-right"></i>
    </div>
    </div>`//phải khai báo template ở trong function để có thể thay đổi link src của img
    document.body.insertAdjacentHTML('afterbegin',template);
}
document.addEventListener('click',function(event) {
    const lightboxImg = document.querySelector('.lightbox-img');//tạo ra rùi nên có thể truy vấn đc
    if(!lightboxImg) return;// nếu class="lightbox-img" ko đc tạo thì return;
    if(event.target.matches('.lightbox')) {
        event.target.parentNode.removeChild(event.target);
    }
    let index=[...img].findIndex((item) => item.getAttribute('src') === lightboxImg.getAttribute('src'));//lấy vị trí của mảng img có src giống vs lightbox
    if(event.target.matches('.icon-right')) {
        index++;
        if(index >= [...img].length) index = 0;//nếu hết ảnh next thì quay về 0
        addNewSrc(lightboxImg,index);
    }
    if(event.target.matches('.icon-left')) {
        index--;
        if(index < 0) index = [...img].length - 1;//nếu hết ảnh next thì quay về cuối
        addNewSrc(lightboxImg,index);
    }
})
function addNewSrc(lightboxImg,index) {//để lấy cái index mới vào mảng img rùi lấy link ảnh push vô lightboxImg
    const newSrc = [...img][index].getAttribute('src');
    lightboxImg.setAttribute('src',newSrc);
}