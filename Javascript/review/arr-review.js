// //b1
// function reverseStr(str) {
//     if(typeof str !== 'string') return null;
//     let arr = str.split(" ").reverse();
//     return arr.join(" ");
// }
// console.log(reverseStr('I am MinhBuiIT'));
// //b2 
// function reverseWord(string) {
//     if(typeof string !== 'string') return null;
//     return string.split('').reverse().join('');
// }
// console.log(reverseWord('i love'));
// //b3
// function capitalize(text) {
//     if(typeof text !== "string" || text === "") return;
//     let arrText = text.toLowerCase().split("");
//     arrText[0] = arrText[0].toUpperCase();
//     let newText = arrText.join("");
//     return newText;
// }
// function capitalizeStr(str) {
//     if(typeof str !== 'string') return null;
//     let arr = str.split(' ');
//     let newArr = arr.map((item) => capitalize(item));
//     return newArr.join(' ');
// }
// console.log(capitalizeStr('i am minh bui it'));
//b4
const arr = [1,1000,false,null,'evondev',"",undefined,"javascript",[1,2,3],NaN];
// let arrTrue = [];
// function deleteFalsthy(arr) {
//     arr.forEach((item) => {
//         if(item || Array.isArray(item)) {
//             arrTrue.push(item);
//         }
//     })
// }
// deleteFalsthy(arr);
// console.log(arrTrue);
const arrTrue = arr.filter((item) => Boolean(item));
// console.log(arrTrue);
const arrComplex = [[1,2,3,[false,null]],[1,2,5,['javascript']],[888,66,[999]]];
const arrSimple = arrComplex.flat(3);
// console.log(arrSimple);
//b5
function reverseNumber(number) {
    if(typeof number !== 'number') return;
    let mark = Math.sign(number);
    number*=mark;
    let newNumber = number.toString().split('').reverse().join('');
    return Number(newNumber)*mark;
}
console.log(reverseNumber(-4));
//b6
// let vowels = ['a','o','e','u','i'];
function countVowel(str) {
    let count=0;
    // let strCpy = str.slice().toLowerCase();
    // strCpy.split('').forEach((item1) => {
    //     vowels.forEach((item2) => {
    //         if(item1===item2) count++; 
    //     })
    // })
    let vowels = 'aoeui';
    for(let c of str.toLowerCase()) {
        if(vowels.includes(c)) count++;
    }
    return count;
}
console.log(countVowel('MINH'));
//b6
const arrNumber = [1,2,3,1,1,2,2,3,4,4,4,6,5,6,5,7];
let arrEmty = [];
function unique(arr) {
    if(!Array.isArray(arr)) return 0;
    for(let c of arr) {
        if(!arrEmty.includes(c)) {
            arrEmty.push(c);
        }
    }
    return arrEmty;
}
unique(arrNumber);
console.log(arrEmty);
//b7
let newArray = [];
function splitArr(arr,number) {
    for(let index=0;index<arr.length;index = index+number) {
        newArray.push(arr.slice(index,index+number));
    }
    return newArray;
}
console.log(splitArr([1,2,3,4,5],3));