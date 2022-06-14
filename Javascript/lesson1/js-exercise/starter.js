const body = document.body;
const titleArr = ['Welcom to my website','Hello you','Welcome to Minh','Nghi','Minh'];
const imgArr = ['https://images.unsplash.com/photo-1646642955600-8b7e577c1a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','https://images.unsplash.com/photo-1646854277234-f618e1f29b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1124&q=80','https://images.unsplash.com/photo-1646864052090-071a579e1346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80','https://images.unsplash.com/photo-1646856977092-1331b34ca2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80','https://images.unsplash.com/photo-1638913976381-5b8ed66c36d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'];
function notification(string,link) {
    const template = ` <div class="noti">
    <img src="${link}" alt="" class="noti-img">
    <div class="des">
        <h1 class="title">${string}</h1>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, deleniti.</p>
    </div>
    </div>`;
    body.insertAdjacentHTML('afterbegin',template);
}
let str2;
let link2;
const timer = setInterval(() => {
    const noti = document.querySelector('.noti');
    const img = document.querySelector('.noti-img');//https:source.unsplash.com/random
    if(noti) {
        noti.parentNode.removeChild(noti);
    }
    let str = titleArr[Math.floor(Math.random() * (titleArr.length))];
    let link = imgArr[Math.floor(Math.random() * (imgArr.length))]
    if(str2 !== str && link2 !== link) {
        notification(str,link);
    }
    str2 = str;
    link2 = link;
}, 4000);
