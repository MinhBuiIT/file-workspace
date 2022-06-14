const template = `<div class="modal">
<div class="modal-content">
    <i class="fa fa-times modal-close"></i>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio obcaecati natus libero fugiat nam consequatur, provident sed? Molestiae temporibus nisi repellendus error vitae, rerum quae cum alias. Quae, modi!</p>
    <div class="modal-action">
        <button class="btn-confirm">Confirm</button>
        <button class="btn-cancle">Cancle</button>
    </div>
</div>
</div>`;
const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin',template);
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const timer = setTimeout(() => {
    modal.classList.add('is-shown');
},3000)
modalClose.addEventListener('click',handlesClose);
function handlesClose(e) {
    modal.classList.remove('is-shown');
}
document.addEventListener('click',(e)=> {
    console.log(e.target);
    if(e.target.matches('.modal') || e.target.matches('.btn-cancle')) {
        modal.classList.remove('is-shown');
    }
})