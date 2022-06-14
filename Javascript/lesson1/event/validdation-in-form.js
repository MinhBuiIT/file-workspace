//validation là chuẩn hay điều kiện khi nhập vào trong form
const form = document.querySelector('.form');
const showPassword = document.querySelector('.show-password');
form.addEventListener('submit',function(e) {
    e.preventDefault();
    let user = this.elements["username"].value;
    let password = this.elements["password"].value;
    if(!user) {
        alert("Nhap vao ten nguoi dung");
        return;
    }
    if(!password) {
        alert("Nhap vao mat khau");
        return;
    }
    if(user.length < 3) {
        alert("too short");
        return;
    }
})
showPassword.addEventListener('click',function(e) {
    // form.getAttribute('name');
    let passwordUser = form.elements["password"];
    if(passwordUser.getAttribute('type') === "password") {
        passwordUser.setAttribute('type','text');
    }else {
        passwordUser.setAttribute('type','password');
    }
})