const template = `<div class="modal">
<div class="overlay"></div>
<ion-icon name="close-outline" class="icon-close"></ion-icon>
<div class="modal-wrap">
    <form class="modal-input">
        <label for="">Your Email</label>
        <input type="email" placeholder="Email">
        <label for="">Your Password</label>
        <input type="password" placeholder="Password">
    </form>
    <button class="modal-btn">Login</button>
</div>
</div>`;
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(e) {
    document.body.insertAdjacentHTML("afterbegin",template);
})
document.body.addEventListener('click',function(e) {
    const modal = document.querySelector('.modal');
    if(e.target.matches('.icon-close')) {
        modal.classList.add('is-closed');
    }
    if(e.target.matches('.overlay')) {
        modal.classList.add('is-closed');
    }
})
