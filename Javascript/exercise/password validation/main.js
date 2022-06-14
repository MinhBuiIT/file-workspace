window.addEventListener('load',function() {
    const inputPassword = document.querySelector('.input-password');
    const checkLength = inputPassword.parentNode.parentNode.querySelector('.check-quality');
    const checkUpp = inputPassword.parentNode.parentNode.querySelector('.check-upp');
    const checkNum = inputPassword.parentNode.parentNode.querySelector('.check-num');
    const checkSpecial = inputPassword.parentNode.parentNode.querySelector('.check-special');
    const itemValidation = inputPassword.parentNode.parentNode.querySelectorAll('.validation-item');
    const eyeShown = inputPassword.nextElementSibling;
    eyeShown.addEventListener('click',function(e) {
        if(inputPassword.getAttribute('type') === 'password') {
            inputPassword.setAttribute('type','text');
        }else {
            inputPassword.setAttribute('type','password');
        }
    })
    inputPassword.addEventListener('input',function(e) {
        const password = e.target.value;
        if(!password) {
            [...itemValidation].forEach(item => {
                item.classList.remove('unactive');
                item.classList.remove('active');
            })
            return;
        }
        if(password.length < 8) {
            checkLength.classList.add('unactive');
            checkLength.classList.remove('active');
        }else {
            checkLength.classList.add('active');
            checkLength.classList.remove('unactive');
        }

        addRemovePassword(/[A-Z]/,checkUpp);
        addRemovePassword(/[0-9]/,checkNum);
        addRemovePassword(/[!@#$%^&*()[\]\_?<>]/,checkSpecial);

        function addRemovePassword(regex,selector) {
            if(regex.test(password)) {
                selector.classList.add('active');
                selector.classList.remove('unactive');
            }else {
                selector.classList.add('unactive');
                selector.classList.remove('active');
            }
        }
    })
})