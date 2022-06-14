// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
window.addEventListener('load',function() {
    const btn = document.querySelector('.btn');
    const overlay = document.querySelector('.overlay');
    const iconDelete = document.querySelector('.icon-delete');
    const modalContent = document.querySelector('.modal-content');
    btn.addEventListener('click',function(e) {
        overlay.classList.add('shown');
    });
    iconDelete.addEventListener('click',function(e) {
        overlay.classList.remove('shown');
    })
    overlay.addEventListener('click',function(e) {
        if(!modalContent.contains(e.target)) {
            overlay.classList.remove('shown');
        }
    })
})