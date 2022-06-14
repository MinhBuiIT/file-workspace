//1. bind(this, arg1,arg2,....)
const person = {
    firstname: 'Bui',
    lastname: 'Minh',
    greet: function() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

person.greet();
const button = document.querySelector('.button');
button.addEventListener('click', person.greet); //undefined undefined vì this lúc này trỏ tới button
button.addEventListener('click', person.greet.bind(person));

const selector = document.querySelector.bind(document);
const selector2 = document.querySelectorAll.bind(document);
const button2 = selector('.button');

//partical function: partial function tức là tạo ra 1 function mới từ 1 function cũ bằng cách gán mặc định một số tham số cho function cũ đó
function introduce(yourName, yourAge, yourHometown) {
    console.log(yourName + ' ' + yourAge + ' ' + yourHometown);
}

//c1
// function itMe(place) {
//     introduce('Minh', 19, place);
// }
// itMe('Tiền Giang');
//c2
let itMe = introduce.bind(null, 'Minh', 19); //ko có giá trị this nên parameter đầu là null
itMe('Tiền Giang');
//2.call(this,arg1,arg2,....): gọi chạy code ngay
function sayHello(str1, str2) {
    console.log(`${str1} ${str2} ${this.firstname} ${this.lastname}`);
}
sayHello('Hi', 'Good morning'); //Hi Good morning undefined undefined
//bind khác call ở chỗ là bind phải gắn vào một biến r mới gọi ra còn call chỉ cần khai báo tự động chạy ra
sayHello.call(person, 'Hi', 'Good morning'); //Hi Good morning Bui Minh
//3.apply(this,[arg1,arg2,...]);
sayHello.apply(person, ['Hello', 'Good evening']); //Hello Good evening Bui Minh
let arr = [2, 3, 4];
let arr2 = [5, 6, 7];
//nối 2 mảng dùng apply
arr.push.apply(arr, arr2);
console.log(arr); //[2, 3, 4, 5, 6, 7]
//chuyển arguments thành mảng
// function coverttoArr(a, b, c) {
//     const arr3 = Array.from(arguments);
//     return arr3;
// }
// const arr4 = coverttoArr(7, 8, 9);
// console.log(arr4);//[7, 8, 9]
//c2
function coverttoArr(a, b, c) {
    const arr3 = Array.apply(null, arguments);
    return arr3;
}
const arr4 = coverttoArr(7, 8, 9);
console.log(arr4); //[7, 8, 9]