const template = `<div class="modal">
<div class="modal-overlay"></div>
<i class="fa fa-times modal-close"></i>
<form class="modal-content">
    <label for=""> User Name</label>
    <input type="text" name="" id="" placeholder="Name">
    <label for="">Email</label>
    <input type="email" name="" id="" placeholder="Email">
</form>
</div>`
const button = document.querySelector('.button');
button.addEventListener('click',function(){
    document.body.insertAdjacentHTML('beforeend',template);
});
// const modalClose = document.querySelector('.modal-close');
// modalClose.addEventListener('click',handleCloseModal);
// function handleCloseModal() {
//     const modal = document.querySelector('.modal');
//     modal.parentNode.removeChild(modal);
// }
// Error bởi vì khi load lên web thì web chạy dom(html) css js nhưng khi mình đem modal qua js thì khi ấn vào button nó mới hiện ra modal mà khi load lên web ko có class '.modal-close' nên ko thể truy vấn đc
const body = document.querySelector('body');
body.addEventListener('click',handleCloseModal);
function handleCloseModal(event) {
    let modal;
    if(event.target.matches('.modal-close')) {
        modal = event.target.parentNode;
        modal.parentNode.removeChild(modal);
    }else if(event.target.matches('.modal-overlay')) {
        modal = event.target.parentNode;
        modal.parentNode.removeChild(modal);
    }
}