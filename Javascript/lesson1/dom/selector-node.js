//2. selecting node
//2.1 document.querySelector(selector)
const singleNode = document.querySelector('h1');
const singleNode2 = document.querySelector('.container');
const singleNode3 = document.querySelector('#spinner');
const singleNode4 = document.querySelector('.container .wrap')
// console.log(singleNode4);
//2.2 document.querySelectorAll('selector');
const listNode = document.querySelectorAll('.item');
console.log(listNode);
//Nodelist
// for(let i=0;i<listNode.length;i++) {
//     console.log(listNode[i]);
// }
//2.3 documnet.getElementByClassName('class name');
const htmlCollection = document.getElementsByClassName('item');
//2.4 document.getElementsByTagName('tag name')
const tagNameList = document.getElementsByTagName('li');
console.log(tagNameList);
//2.5 document.getElementById('id');
const idNode = document.getElementById('spinner');
console.log(idNode);