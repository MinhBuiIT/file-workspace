// const button = document.querySelector('.button')
// const body = document.body;
// button.addEventListener('click',function(e) {
//     e.stopImmediatePropagation();
//     button.classList.toggle('btn-color');
// }, {
//     capture:true
// })
// body.addEventListener('click',function(e) {
//     body.setAttribute('style','background: orange')
// }, {
//     capture:true
// })
// const span = document.querySelector('.button span');
// span.addEventListener('click',function(e) {
//     e.stopImmediatePropagation();
//     span.setAttribute('style','color:#333');
// }, {
//     capture:true
// });
// //capture la nguoc lai cua bubbling
// target & currenttarget
const button = document.querySelector('.button')
button.addEventListener('click',function(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    //Khi click vao span thi target se tro toi span con currentTarget tro toi button
})
const link = document.querySelector('.link');
link.addEventListener('click',function(e) {
    e.preventDefault();//ko chuyen trang moi
    e.target.style.color = 'red';
})