const inputEmail = document.querySelector('.input-email');
inputEmail.addEventListener('input',function(e) {
    let value = e.target.value;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(value)) {
        inputEmail.classList.add('valid');
        inputEmail.classList.remove('invalid');
    }else {
        inputEmail.classList.remove('valid');
        inputEmail.classList.add('invalid');
    }
    if(!value) {
        inputEmail.classList.remove('invalid');
    }
})