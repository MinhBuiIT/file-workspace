//1. parentNode && parentElement
const span = document.querySelector('.span');
console.log(span.parentNode.parentNode);//body
//2. removeChild
//xoa span
// span.parentNode.removeChild(span);
//3.nextElementSibling && previousElementSibling
const nextNodes = span.nextElementSibling;
console.log(nextNodes);
const previousNode = span.previousElementSibling;
console.log(previousNode);
//4.childNodes[có thể dùng index] && chilren[có thể dùng index]
console.log(span.childNodes);//NodeList [text,strong,text,trong.trong,text]//Mảng dùng index dc 
console.log(span.children);//HTML collection [strong,trong.trong];
//5.firstChild && firstElementChild
console.log(span.firstChild);//#text
console.log(span.firstElementChild);//<strong>MinhBUI</strong>
//6.lastChild && lastElementChild
console.log(span.lastChild);//#text
console.log(span.lastElementChild);//<strong class="strong">MinhBUI</strong>
//7.nextSibling & previousSibling giống như nextElementSibling && previousElementSibling nhưng lấy thêm cả textNode
console.log(span.nextSibling);
console.log(span.previousSibling);