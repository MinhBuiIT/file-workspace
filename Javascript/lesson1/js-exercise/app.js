const body = document.body;
const modal = document.createElement('div');
modal.classList.add('modal');
body.appendChild(modal);
const modalWrap = document.createElement('div');
modalWrap.classList.add('modal-wrap');
modal.appendChild(modalWrap);
const modalDes = document.createElement('div');
modalDes.classList.add('modal-des');
modalWrap.appendChild(modalDes);
const icon = document.createElement('i');
icon.className = 'fa fa-times fa-close';
modalDes.appendChild(icon);
const paragraph = document.createElement('p');
paragraph.classList.add('modal-text');
modalDes.appendChild(paragraph);
paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui porro tempora a unde non ex perferendis totam. Officiis repudiandae maxime nobis quis, eligendi sit. Alias ea debitis impedit rem.';
const modalBtn = document.createElement('div');
modalBtn.classList.add('modal-btn');
modalWrap.appendChild(modalBtn);
const btn1 = document.createElement('button');
btn1.classList.add('modal-submit');
modalBtn.appendChild(btn1);
btn1.textContent = 'sumit';
const btn2 = document.createElement('button');
btn2.classList.add('modal-cancle');
modalBtn.appendChild(btn2);
btn2.textContent = 'cancle';
// const template = `<div class="modal">
// <div class="modal-wrap">
//     <div class="modal-des">
//         <i class="fa fa-times fa-close"></i>
//         <p class="modal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui porro tempora a unde non ex perferendis totam. Officiis repudiandae maxime nobis quis, eligendi sit. Alias ea debitis impedit rem.</p>
        
//     </div>
//     <div class="modal-btn">
//         <button class="modal-submit">sumit</button>
//         <button class="modal-cancle">cancle</button>
//     </div>
// </div>
// </div>`;
// const body = document.querySelector('body');
// body.insertAdjacentHTML('afterbegin',template);
const modal1 = document.querySelector('.modal');
if(modal1) {
    setTimeout(function() {
        modal1.classList.add('is-shown');
    },3000)
}