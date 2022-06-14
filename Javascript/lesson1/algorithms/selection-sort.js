// function selectionSort(array) {
//     for(let i=0;i<array.length-1;i++){
//         let minIndex = i;
//         for(let j=i+1;j<array.length;j++) {
//             if(array[j]<array[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         [array[i],array[minIndex]] = [array[minIndex],array[i]];
//     }
//     return array;
// }
// console.log(selectionSort([5,1,4]));
//tìm vị trí nhỏ nhất rồi mình sẽ đưa giá trị nhỏ nhất về vị trí cuối của mảng
function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++) {
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
    }
    return arr;
}
console.log(selectionSort([5,1,4]));