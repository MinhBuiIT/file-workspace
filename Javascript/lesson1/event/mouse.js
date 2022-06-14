//mousemove, mouseover,mouseenter,mouseleave
const button = document.querySelector('.button');
//mousemove
// button.addEventListener('mousemove',function() {
//     console.log('mousemove');
// })
//mouseover
// button.addEventListener('mouseover',function() {
//     console.log('mouseover');
// })
//mouseenter
// button.addEventListener('mouseenter',function() {
//     console.log('mouseenter');
// })
//mouseleave
button.addEventListener('mouseleave',function() {
    console.log('mouseleave');
})
//pageX,pageY,clientX,clientY
// document.addEventListener("mousemove",function(e) {
//     console.log(`PageY: ${e.pageY}`);
// })
// document.addEventListener("mousemove",function(e) {
//     console.log(`ClientY: ${e.clientY}`);
// })
//client lấy tọa độ theo viewport
//page lấy tọa độ theo viewport và cả khi scroll xuống(ngang X)

