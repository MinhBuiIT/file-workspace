// alert('You are accessing in my website!!!');
// const age = prompt('Nhap vao so tuoi cua ban');
// console.log(age);//Kieu tra ve la string
// const isAge = confirm('Are you 18 years old???');
// console.log(isAge);
//Bai 1: Nhap vao so tuoi cua ban neu lon hon hoac bang 18 thi thong bao ban co the truy xem phim nguoc lai thong bao ban khong du tuoi
/*const isYourAge = prompt('Enter your age,please!');
let  message = 'You aren\'t enough age';;
if (Number(isYourAge) >= 18) {
    message = 'You can watch film...';
}
alert(message);*/
//Bai 2: Kiem tra hai so a b coi so nao lon hon
// const a = 9;
// const b = 9;
// if(a > b) {
//     console.log(`So lon nhat la ${a}`);
// }else if(b > a) {
//     console.log(`So lon nhat la ${b}`);
// }else {
//     console.log(`Khong co so nao lon hon`);
// }

//Ternary operator (cau dieu kien rut gon)
const isAge = 16;
let message;
if(isAge >= 18) {
    message = "You are adult";
}else if(isAge >= 10){
    message = "You are a young boy";
}else {
    message = "You are a child";
}
console.log(message);
let message2;
message2 = isAge >= 18 ? "You are adult" : isAge >= 10 ? "You are a young boy" : "You are a child";
console.log(message2);