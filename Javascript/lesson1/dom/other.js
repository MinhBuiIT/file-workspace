document.title = 'love';    
console.log(document.title);
const meta = `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
document.head.insertAdjacentHTML('afterbegin',meta);
const head = document.querySelector('head');
console.log(head);
//insertBefore
const listNew = document.querySelector('ul');
listNew.classList.add('listNew');
// document.body.insertBefore(listNew,document.querySelector('.box').previousElementSibling);
document.querySelector('.box').insertAdjacentElement('beforebegin',listNew);
//replaceChild
const link = document.createElement('a');
const h2 = document.querySelector('h2');
link.setAttribute('href','https://www.facebook.com/');
link.setAttribute('target','_blank');
link.insertAdjacentText('afterbegin','link facebook');
document.body.replaceChild(link,h2);

const li = document.getElementsByTagName('li');
// console.log(Array.from(li));
[...li].forEach((item) => item);


