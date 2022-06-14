//b1 viet chuong trinh nhap vao nam sinh in ra so tuoi
/*let yearBirth = 2003;
if(typeof yearBirth != "number") {
    alert('khong phai nam sinh');
}else {
    const now = new Date();
    const nowYear = now.getFullYear();
    let soTuoi = nowYear - yearBirth;
    console.log(`So tuoi cua ban la ${soTuoi}`);
}*/
const age = (year) => {
    if(typeof year != 'number') return alert('khong phai nam sinh');
    else {
        const now = new Date();
        const nowYear = now.getFullYear();
        return console.log(`So tuoi cua ban la ${nowYear - year} tuoi`,);
    }
}
// age(2003);
//b2: countdown
// const countdown = (minutes) => {
//     let second = minutes * 60;
//     let count = 0;
//     const timer = setInterval(function() {
//         count = count + 1;
//         console.log(count);
//         if(count === second) {
//             clearInterval(timer);
//             alert('Your Time is End');
//         }
//     },1000)
// }
// countdown(0.1)
//b3: thoi gian offline
// const timeSince = (time) => {
//     const now = new Date();
//     const yourDate = new Date(time);
//     const seconds = Math.floor((now.getTime() - yourDate.getTime())/1000);
//     let timer = seconds / 31536000;
//     if(timer > 1) {
//         console.log(`${Math.floor(timer)} nam truoc`);
//         return;
//     }
//     timer = seconds / 2678400;
//     if(timer > 1) {
//         console.log(`${Math.floor(timer)} thang truoc`);
//         return;
//     }
//     timer = seconds / 604800;
//     if(timer > 1) {
//         console.log(`${Math.floor(timer)} tuan truoc`);
//         return;
//     }
//     timer = seconds / 86400;
//     if(timer > 1) {
//         console.log(`${Math.floor(timer)} ngay truoc`);
//         return;
//     }
//     timer = seconds / 3600;
//     if(timer > 1) {
//         console.log(`${Math.floor(timer)} gio truoc`);
//         return;
//     }
//     timer = seconds / 60;
//     if(timer > 1) {
//         console.log(`${Math.floor(timer)} phut truoc`);
//         return;
//     }
//     timer = seconds;
//     if(timer > 1) {
//         console.log(`${Math.floor(timer)} giay truoc`);
//         return;
//     }

// }
// 1 year equal 31536000 seconds
// 1 month equal 2678400 seconds
// 1 week equal 604800 seconds
// 1 day equal 86400 seconds
// 1 hour equal 3600 seconds
// 1 minutes equal 60 seconds
// timeSince('Sun Feb 12 2021 12:00:00 GMT+0700 (Giờ Đông Dương)');

//countdown
