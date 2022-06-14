//b1
function yourAge(timeBirth) {
    let yearBirth = new Date(timeBirth).getFullYear();
    let now = new Date();
    return now.getFullYear() - yearBirth;
}
// console.log(yourAge("08 October 2003"));
//b2
let count;
let countdown = function(x) {
    count = x * 60;
    let timer = setInterval(() => {
        count-=1;
        console.log(count);
        if(count === 0) clearInterval(timer);
    },1000)
}
// countdown(0.1);
//b3
function timeSince(time) {
    let now = new Date();
    let second = Math.floor((now.getTime() - new Date(time).getTime())/1000);
    console.log(second);
    if(second > 31622400) {
        second = Math.floor(second/31622400);
        console.log(`${second} năm trước`);
        return;
    }
    if(second > 2592000) {
        second = Math.floor(second/2592000);
        console.log(`${second} tháng trước`);
        return;
    }
    if(second > 604800) {
        second = Math.floor(second/604800);
        console.log(`${second} tuần trước`);
        return;
    }
    if(second > 86400) {
        second = Math.floor(second/86400);
        console.log(`${second} ngày trước`);
        return;
    }
    if(second > 3600) {
        second = Math.floor(second/3600);
        console.log(`${second} tiếng trước`);
        return;
    }
    if(second > 60) {
        second = Math.floor(second/60);
        console.log(`${second} phút trước`);
        return;
    }
    if(second > 0) {
        console.log(`${second} giây trước`);
        return;
    }
}
timeSince("Thur May 20 2022 10:02:00 GMT+0700 (Giờ Đông Dương)")
