//1.document.createElement
const div = document.createElement('div');
//2.document.appendChild
const body = document.querySelector('body');
body.appendChild(div);
// tao the p trong div co class la paragraph
const pa = document.createElement('p');
div.appendChild(pa);
// pa.className = 'paragraph des'; dùng tạo nhìu class
pa.classList.add('paragraph');
pa.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia optio architecto, iusto quibusdam soluta porro assumenda perspiciatis rerum! Sunt odio eaque dignissimos magnam tempore natus sapiente tempora, commodi nemo minus!';
// pa.innerHTML = '<strong>ámamlalal</strong>'
//tạo img bằng js
const card = document.createElement('div');
body.appendChild(card);
card.classList.add('card');
const img = document.createElement('img');
card.appendChild(img);
// img.setAttribute('src','https://source.unsplash.com/random');
img.classList.add('card-img');
//3.createTextNode('String');
const h1 = document.createElement('h1');
body.appendChild(h1);
h1.classList.add('title');
const text = document.createTextNode('My name is MinhBuiIT');
h1.appendChild(text);
//4.element.cloneNode(boolean) -> true thì trả về nội dung element sao chép, false thì trả về thui
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);