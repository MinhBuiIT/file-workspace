//1.selector.getAttribute('attribute');
//attribute: class, href, src, style,type;
const link = document.querySelector('.link');
console.log(link.getAttribute('href'));
const li = document.querySelectorAll('li');
li.forEach(item => console.log(item.getAttribute('class')));
//2.setAttribute('attribute','value');
//thêm vao thẻ a attribute là target = "_blank"
const linkList = document.querySelectorAll('a.link');
linkList.forEach((item) => item.setAttribute('target','_blank'));
//3.removeAttribute('attribute')
const title = document.querySelector('h1');
title.removeAttribute('style');
//4. hasAttribute('attribute')
const container = document.querySelector('.container');
if(!container.hasAttribute('style')) {
    container.setAttribute('style','color: red;');
}