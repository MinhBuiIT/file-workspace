const template = `<div class="modal">
<div class="modal-overlay"></div>
<i class="fa fa-times modal-close "></i>
<form class="modal-content">
    <label for="">User</label>
    <input type="text" name="" id="" placeholder="Name" required>
    <label for="">Email</label>
    <input type="email" name="" id="" placeholder="Email" required>
</form>
</div>`
const btn = document.querySelector('.button');
btn.addEventListener('click',handleModal);
function handleModal(e) {
    document.body.insertAdjacentHTML('beforeend',template);
}
document.body.addEventListener('click',function(event) {
    console.log(event.target);
    const modal = document.querySelector('.modal');
    if(event.target.matches('.modal-close') || event.target.matches('.modal-overlay')) {
        modal.parentElement.removeChild(modal);
    }
})