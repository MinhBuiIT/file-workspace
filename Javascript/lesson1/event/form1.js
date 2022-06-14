// const form = document.querySelector('.form');
// const username = document.querySelector('.username');
// form.addEventListener('submit',function(e) {
//     e.preventDefault();
//     let text = this.elements['username'].value;
//     let gender = this.elements['gender'].value;
//     console.log({text,gender});
//     let hobby = this.querySelectorAll(`input[name = 'hobby']`);
//     let hobbyValue = [];
//     [...hobby].forEach(item => {
//         if(item.checked) {
//             hobbyValue.push(item.value);
//         }
//     });
//     console.log(hobbyValue);
// })
const form = document.querySelector('.form');
form.addEventListener('submit',function(e) {
    e.preventDefault();
    let username = this.elements['username'].value;
    let password = this.elements['password'].value;
    if(!username) {
        alert('Please enter your username');
        return;
    }
    if(!password) {
        alert('Please enter your password');
        return;

    }
    if(password.length<3) {
        alert('too short');
        return;
    }
})