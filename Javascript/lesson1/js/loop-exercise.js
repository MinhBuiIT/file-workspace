//b1 loai bo gia tri falthy giu lai truethy cho mang [1,1000,false,null,"evondev","",undefined,"javascript",[1,2,3]]
const array = [1,1000,false,null,"evondev","",undefined,'javascript',[1,2,3],NaN];
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);
//b2
const complexArr = [[1,2,3,[false,null]],[1,5,6,['javascript']],[888,666,[90]]];
//dung flat
const newArr = complexArr.flat(3);
console.log(newArr);
//b3 1234 -> 4321, -123 -> -321
//Math.sign(123) -> 1
//Math.sign(-123) -> -1
let b = 0 ;
function reverseNumber(number){
    return parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
    // b = (b*10 + number%10);
    // if(number === 0 ) {
    //     return b ;
    // }
    // return reverseNumber(Math.floor(number/10));
}
console.log(reverseNumber(-123))
//b4 viet ct co ten fizzBuzz voi dau vao la mot so nguyen duong, chia het cho 2 in ra "Fizz", chia het cho 3 thi in ra 'Buzz', chia het cho 2 3 in ra "FizzBuzz"
function fizzBuzz(number) {
    for(let i = 1;i <= number;i++) {
        if(i%2===0 && i%3===0) {
            console.log("FizzBuzz");
        }else if(i%2 === 0) {
            console.log("Fizz");
        }else if(i%3 === 0) {
            console.log("Buzz");
        }
    }
}
fizzBuzz(10)
//b5 cho chuoi bat ki dem so luong vowel(a,e,u,i,o)
function countVowel(Str) {
    let count = 0;
    let vowel = 'aeuio';
    let lowerCaseStr = Str.toLowerCase(); 
    /*for(let i=0; i < lowerCaseStr.length;i++) {
        switch(lowerCaseStr[i]) {
            case 'a':
            case 'e':
            case 'u':
            case 'i':
            case 'o':
                count++;
                break;
            default:
                break;
        }
    }*/
    for(let c of lowerCaseStr) {
        if(vowel.includes(c)) count++;
    }
    return count;
}
console.log(countVowel('MinhBui'));//3
//b5 unique
function unique(array) {
    let result = [];
    if(!Array.isArray(array)) return result;
    result.push(array[0]);
    for(let i=0;i<array.length;i++) {
        for(let i=0;i<array.length;i++) {
            if(!result.includes(array[i])) {
                result.push(array[i]);
            }
        }
    }
    return result;
}
// console.log(unique([1,2,3,1,1,1,2,2,3,5,5,6,7]));
console.log(unique(3));
//b7
function splitArr(arr,number) {
    let result = [];
    if(!Array.isArray(arr)) return result;
    let index = 0;
    while(index < arr.length) {
        result.push(arr.slice(index,index+number));
        index += number;
    }
    return result;
}
console.log(splitArr([1,2,3,4,5,6],3));