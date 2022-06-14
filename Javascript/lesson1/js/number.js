const numberStr = '5';
const numberStr2 = '5.6';
console.log(parseInt(numberStr));
console.log(parseFloat(numberStr2));
const nega = -10;
console.log(Math.abs(nega));
console.log(Math.floor(numberStr2))//5
console.log(Math.ceil(numberStr2))//6
console.log(Math.round(numberStr2))//6
const a = 1/3;
console.log(parseFloat(a.toFixed(2)));//0.33
console.log(Math.pow(numberStr,2));// 25
console.log(Math.round(Math.random() * 10));
console.log(Math.max(3,5,2));//5
// isNaN(NaN -> not a number -> true or false)
console.log(isNaN('chuoi'));//true
console.log(isNaN('37.5'));//false
//Number.isNaN(value); value la NaN, Number.NaN, 0 / 0 -> true
//all false
console.log(Number.isNaN(0 / 0));
