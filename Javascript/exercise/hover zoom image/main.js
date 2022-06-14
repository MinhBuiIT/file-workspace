const cover = document.querySelector('.cover');
const imageWrap = document.querySelector('.image-wrap');
let imageWrapWidth = imageWrap.offsetWidth;
let imageWrapHeight = imageWrap.offsetHeight;
const image = document.querySelector('.img');

cover.addEventListener('mousemove',handleZoomImg);
function handleZoomImg(event) {
    let pX = event.pageX;//lay tọa độ khi mousemove vào cover
    let pY = event.pageY;
    image.style = "width: auto; height: auto; max-height:unset;max-width: unset";//đặt lại kích thước hình ảnh mặc định
    let imageWidth = image.offsetWidth;// sau đó lấy ra kích thước thật của ảnh bằng offset
    let imageHeight = image.offsetHeight;
    let spaceX = (imageWidth/2 - imageWrapWidth )*2;//tính khoảng trắng để cộng hoặc trừ cho ảnh khi thiếu hoặc dư và phải nhân 2 cho hai bên ảnh
    imageWidth = imageWidth + spaceX;//cộng or trừ khoảng space cho ảnh
    let spaceY = (imageHeight/2 - imageWrapHeight )*2;
    imageHeight = imageHeight + spaceY;
    let ratioX = (imageWidth/imageWrapWidth)/2; // tính tỉ lệ ảnh so với wrap và phải chia cho 2(lấy nửa tỉ lệ)
    let ratioY = (imageHeight/imageWrapHeight)/2; 
    let x = (pX - imageWrap.offsetLeft)*ratioX;//tọa độ bẳng tọa độ khi mousemove - kcach trái hoặc top rồi nhân cho tỉ lệ
    let y = (pY - imageWrap.offsetTop)*ratioY;
    image.style = `top: ${-y}px;left: ${-x}px;width: auto; height: auto; max-height:unset;max-width: unset;transform: none;`//đặt lại transform
}
cover.addEventListener('mouseleave',function(e) {
    image.style = '';//khi mousemove khỏi cover ảnh trở lại ban đầu
})