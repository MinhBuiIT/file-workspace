const now = new Date();
console.log(now);
//timestamp va unixtime 
console.log(now.getTime());//1644502181976
console.log(new Date(24*3600*1000));
//4 cach su dung new
// c1 new Date() -> in ra thoi gian hien tai
// c2 new Date(timestamp) -> dua vao timestamp de in thoi gian
console.log(new Date(1644670140345)); 
// c3 new Date(date string) 
console.log(new Date('Sat Feb 12 2022 19:49:17 GMT+0700 (Giờ Đông Dương)'));
// c4 new Date(year,month,dat,hours,minutes,second,milisecond)
console.log(new Date(2021,9,3,20,17,100,10));
const birthday = new Date(2003,9,8);
console.log(birthday.getFullYear());//2003
console.log(birthday.getMonth());//9
console.log(birthday.getDate());//8
console.log(birthday.getDay());//3 -> t4
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getMilliseconds());
console.log(birthday.getTime());//1065546000000
//date string
console.log(now.toDateString());//Sun Feb 13 2022
console.log(now.toTimeString());//08:24:29 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString());//dd/m/yyyy
console.log(now.toISOString());//2022-02-13T01:26:26.261Z
//13/2/2022 --> 13/02/2022
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
/*c1
if(day<10) {
    day = "0" + day;
}
if(month<10) {
    month = "0" + month;
}
console.log(`${day}/${month}/${year}`);*/
//c2
const prefixMonth = month<10 ? "0" : "";
const prefixDay = day<10 ? "0" : "";
console.log(`${prefixDay}${day}/${prefixMonth}${month}/${year}`);
//setTimeout vs setInterval
// const timer1 = setTimeout(function() {
//     alert('call me after 3 seconds');
// },1000);
// clearTimeout(timer1);
const timer =setInterval(function() {
    console.log('love');
},2000);
clearInterval(timer);