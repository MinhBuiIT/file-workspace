function log(value) {
    console.log(value);
}
const box = document.querySelector('.box');
log(box.offsetWidth);
log(box.offsetHeight);
log(box.offsetLeft);
log(box.offsetTop);
log(box.offsetParent);
//2.client
log(box.clientWidth);
log(box.clientHeight);
log(box.clientLeft);
log(box.clientTop); 
//3.window
log('-------window------');
log(window.innerWidth);
log(window.outerWidth);
log(window.innerHeight);
log(window.outerHeight);
//4.selector.getBoundingClientRect()
log(box.getBoundingClientRect());
const li1 = document.querySelectorAll('li');
log(li1); 
const li2 = document.getElementsByTagName('li');
log(li2);
// li2.forEach(item => item);
li1.forEach(item => console.log(item.className));
