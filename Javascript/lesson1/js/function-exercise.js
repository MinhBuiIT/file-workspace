//B1 viet function so sanh hai so a va b tim ra so lon hon
/*function max(a,b) {
    let max = a;
    if(max < b) {
        max = b;
    }
    return max;
}
console.log(max(7,7));*/
function compare(a,b=10) {
    if(typeof a != 'number' || typeof b != 'number') {
        return 'You write a number, please';
    }
    return Math.max(a,b);
}
console.log(compare('10'));
//B2 In hoa chu cai vi du minh -> Minh, Minh -> MINH
let a = '';
function wordUppercase(a) {
    if(a.charAt(0) === a.charAt(0).toUpperCase()) {   
        return a.toUpperCase();;
    }else {
        return `${a.slice(0,1).toUpperCase()}${a.slice(1)}`;
    }
}
console.log(wordUppercase('Minh'));
//B3 In hoa chu cai vi du minh -> Minh, MINH -> Minh
function firstUppercase(b = '') {
    if(typeof b != 'string') return 0;
    return `${b.slice(0,1).toUpperCase()}${b.slice(1).toLowerCase()}`;
}
console.log(firstUppercase('MINH'));
//B4 goi lai function compare va in ra
function isCallBack(a,b,callback) {
    let max = compare(a,b);
    callback(max);
}
function print(number) {
    console.log('max is',number);
}
isCallBack(500, 1000,print);
//arrow function
const square = (x) => {
    return x*x;
}
console.log(square(5));
const square2 = () => 1000;
console.log(square2());