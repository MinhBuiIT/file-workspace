window.addEventListener('load',function() {
    const eye = document.querySelector('.shown');
    eye.addEventListener('click',function(e) {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type');
        if(type === 'password') {
            input.setAttribute('type','text');
        }else {
            input.setAttribute('type','password');
        }
    })
})