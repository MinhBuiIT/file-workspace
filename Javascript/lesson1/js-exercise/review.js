// const template = `<div class="modal">
// <div class="modal-wrap">
//     <div class="modal-content">
//         <ion-icon class="icon" name="close-outline"></ion-icon>
//         <p class="modal-des">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit officiis soluta perferendis rerum cum temporibus, officia voluptatem iusto nobis!Lorem Ipsum ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit officiis soluta perferendis rerum cum temporibus, officia voluptatem iusto nobis!Lorem Ipsum
//         </p>
//     </div>
//     <div class="modal-btn">
//         <button class="btn btn-confirm">Confirm</button>
//         <button class="btn btn-cancle">cancle</button>
//     </div>
// </div>
// </div>`;
// document.body.insertAdjacentHTML("afterbegin",template);
// const modal = document.querySelector('.modal');
// if(modal) {
//     setTimeout(function() {
//         modal.classList.add('is-shown');
//     },3000)
// }
const arrTitle = ['Welcom to my website','Javascript','Frontend Dev']; 
function shownNoti(str) {
    const template = ` <div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-img">
    <div class="noti-content">
        <h2 class="noti-title">${str}</h2>
        <p class="noti-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
    </div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin',template);
}
let randomStr;
let randomStr2;
setInterval(function() {
    const noti = document.querySelector('.noti');
    if(noti) {
        noti.parentNode.removeChild(noti);
    }
    randomStr = arrTitle[Math.floor(Math.random() * arrTitle.length)];
    if(randomStr !== randomStr2) {
        shownNoti(randomStr);
    }
    randomStr2 = randomStr;
},4000)
