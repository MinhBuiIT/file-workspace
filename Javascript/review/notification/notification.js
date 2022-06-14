const title = ['Welcome to MinhBui','My name is Minh','Love my website'];
function createNoti(title) {
    const template = `<div class="notification">
    <img src="https://source.unsplash.com/random" alt="photo" class="noti-img">
    <div class="noti-des">
        <h3>${title}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nesciunt impedit natus</p>
    </div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin',template);
}
const timer = setInterval(() => {
    const noti = document.querySelector('.notification');
    let mainAfter;
    let main = title[Math.floor(Math.random()*title.length)];
    if(mainAfter === main || noti) {
        noti.parentNode.removeChild(noti);
    }else {
        createNoti(main);
    }
    mainAfter = main;
},5000)