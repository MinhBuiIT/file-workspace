const arr = [2,3,4,5,6];
let arrSorted = arr.sort((a,b) => a-b);//[2, 3, 4, 7, 8, 9, 23, 33, 34, 55, 66, 78, 99]
function checkValue(arr,value) {
    let low = 0;
    let high = arr.length - 1;
    while(low<=high) {
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === value) return mid;
        if(arr[mid] > value) {
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
}
console.log(checkValue(arrSorted,4));