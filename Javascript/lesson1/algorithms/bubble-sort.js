// Array.prototype.bubbleSort = function(array) {
//     const arr = array.slice();
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if(arr[j]>arr[j+1]) {
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }

//     }
//     return arr;
// }
// [5,6,1] => [5,1,6] => [1,5,6]
let array = [1, 5, 4, 3, 7, 1, 8, 6, 99, 0, 123, 2];
function bubbleSort(array) {
    let a = [...array];
    for(let i=0;i<a.length;i++) {
        for(let j=0;j<a.length-i;j++) {
            if(a[j+1] < a[j]) {
                [a[j+1],a[j]] = [a[j],a[j+1]];
            }
        }
    }
    return a;
}
console.log(bubbleSort(array));