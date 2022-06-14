//[1,2,3,1,1] => [5,2,3,5,5]
function replaceArr(arr,numberBefore,numberAfter) {
    if(!Array.isArray(arr)) return;
    let arrClone = arr.map((item) => {
        if(item === numberBefore) {
           item = numberAfter;
        }
        return item;
    })
    return arrClone;
}
const arr = ['1','2','3','1','1']
// console.log(replaceArr(arr,'1','9'));
// console.log(arr);
function Palindrome(str1) {
    str1=str1.toLowerCase();
    let n = str1.length;
    for(let i=0;i<n/2;i++) {
        if(str1[i]!=str1[n-i-1]) {
            return false;
        }
    }
    return true;
}
// console.log(Palindrome('aaBAA'));
let arr2 = [1,2,3,4,5,6,7,8];
function ArrayChunking(arr,number) {
    if(!Array.isArray(arr)) return 0;
    let arrClone2 = arr.slice();
    let arrNew = [];
    let index = 0;
    while(arrClone2.length>0) {
        arrNew.push(arrClone2.splice(index,number));//splice(vị trí, số phần tử)
    }
    return arrNew;
}
// console.log(ArrayChunking(arr2,2));
function ArrayReverse(arr) {
    let arrClone = [...arr];
    for(let i=0;i<arrClone.length/2;i++) {
        let temp = arrClone[i];
        arrClone[i] = arrClone[arrClone.length-i-1];
        arrClone[arrClone.length-i-1] = temp;
    }
    return arrClone;
}
let result = ArrayReverse(arr2);
console.log(result);


