// Array.prototype.insertSortIncrease = function(array) {
//     const arr = array.slice();
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[i]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//                 // const temp = arr[i];
//                 // arr[i] = a[j];
//                 // a[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let array = [5,1, 4, 3, 7, 1, 8, 6, 99, 0, 123, 2]; //12
// function insertSort(array) {
//     let a = array.slice();
//     for(let i=1;i<a.length;i++) {
//         let current = a[i];
//         let j;
//         for(j=i-1;j>=0 && a[j] > current;j--) {
//             a[j+1] = a[j];
//         }
//         a[j+1] = current;//vì xuống đây j-- giảm 1 đơn vị so với trc nên ta phải cộng 1 vô gắn lại cái cũ
//     }
//     return a;
// }
// console.log(insertSort(array));
//[5,1,6,4] => [5,5,6,4] => [1,5,6,4] => [1,5,6,6] => [1,5,5,6] => [1,4,5,6]
function insertSort(arr) {
    for(let i=1;i<arr.length;i++) {
        let current = arr[i];
        let j;
        for(j=i-1;j>=0 && arr[j] > current;j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = current;
    }
    return arr;
}
console.log(insertSort([5,1,6,4]));
