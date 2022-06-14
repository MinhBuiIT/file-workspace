const numbers = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i < numbers.length;i++) {
    // console.log(`index of number ${i}`);
// }
//In ra cai gia tri cua mang
/*for(let i=0;i < numbers.length;i++) {
    //in ra toi gia tri bang 8 thi ngung
    // console.log(`index of number ${numbers[i]}`);
    // if(numbers[i] === 8) {
    //     break;
    // }
    //In ra toi gia tri bang 8 thi bo qua
    if(numbers[i] === 8) {
        continue;
    }
    console.log(`index of number ${numbers[i]}`);
}*/
// for(let i=numbers.length-1;i >= 0;i--) {
//     // console.log(`index of number ${numbers[i]}`);
// }
const array = [[1,2,3,4,5],[6,7,8,9]];
for(let i=0;i<array.length;i++) {
    let newArray = array[i];
    for(let j=0;j<newArray.length;j++) {
        console.log(newArray[j]);
    }
}
const fiveElement = ['fire','water','siler','wood','ground'];
//1. Sao chep mang dung vong lap for
let copyFiveElement = [];
for (let i=0;i < fiveElement.length;i++) {
    copyFiveElement.push(fiveElement[i]);
};
console.log(copyFiveElement);
//2. dao nguoc tu i love -> evol i
const str = 'i love';
let newStr = "";
for(let i=str.length-1;i>=0;i--) {
    newStr = newStr + str[i];
}
console.log(newStr);
//vong lap for(value of array(string))
for(let a of numbers) {
    a++;
    console.log(a);
}
let b = '';
for(let c of 'MinhBui') {
    b = b + c;
}
console.log(b);