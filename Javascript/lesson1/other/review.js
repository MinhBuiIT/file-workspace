const arrComplex = [
    [1, 2, 3],
    [4, 5, [6, 7]], 9, 10
];

function simpleToArr(arrClx, number) {
    if (number < 0) {
        return arrClx.slice();
    } else {
        let simpleArr = arrClx.reduce((a, b) => a.concat(Array.isArray(b) ? simpleToArr(b, number - 1) : b), []);
        return simpleArr;
    }
}
console.log(simpleToArr(arrComplex, Infinity));
const arr = [1, 1, 2, 2, 2, 3, 3, 4, 6, 6, 7, 7, 5];
// const arr1 = new Set(arr);
// console.log(Array.from(arr1));
const arr1 = [];
arr.forEach((item) => {
    if (!arr1.includes(item)) {
        arr1.push(item);
    }
})
console.log(arr1);