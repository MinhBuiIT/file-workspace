//arguments
console.log('minh bui');

function total(a, b, c) {
    console.log(arguments[1]);
    console.log(typeof arguments); //object
    //ta cung co the chuyen thanh arr
    let arr = Array.from(arguments);
    console.log(arr);
    if (!arguments.length) {
        return 'No arguments';
    } else {
        return a + b + c;
    }
}
console.log(total(1, 2, 3));
//closure
for (var i = 1; i < 5; i++) {
    setTimeout(function() {
        console.log(i); //5 5 5 5
    }, 1000)
}
//bởi vì var bị hosting và setTimeout chạy sao 1s khi đó biến i là 5
// for (let i = 1; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i); //1 2 3 4
//     }, 1000)
// }
//bởi vì let ko bị hosting và setTimeout sẽ tham chiếu đến mỗi biến let i tu 1 đến 4
const obj = {
    count: 0,
    increment() {
        return ++this.count;
    }
}
console.log(obj.increment());
//đệ quy
console.log('_________________________________________');
const arrComplex = [
    [1, 2, 3],
    [3, 4, 5],
    1000, [
        [2, 3],
        [2, 3, 5],
        [1, 2],
    ],
];

function convertToArrSim(arr, number) {
    let result;
    if (number <= 0) {
        result = arr.slice(); //nếu là mảng đơn chỉ cần slice nó thui (sao chép)
    } else {
        result = arr.reduce((a, b) => a.concat(Array.isArray(b) ? convertToArrSim(b, number - 1) : b), []);
    }
    return result;
}
// console.log(convertToArrSim(arrComplex, 3));
/**
 const arrComplex = [
    [1, 2, 3],
    [3, 4, 5],
    1000, [
        [2, 3],
        [2, 3, 5],
        [1, 2],
    ],
];
    reduce: kiểu lặp từng thành phần trong mảng r return ra kết quả duy nhất; giá trị cuối cùng khởi tạo cho a
    Nếu b là 1 mảng thì mình convertToArrSim(b, number - 1)
    vi du b = [1, 2, 3].
    convertToArrSim([1,2,3],2)
    do b lúc này là 1 nên ko phải mảng nên a.concat(1) => [1];
    r hàm reduce là chạy từng giá trị trong mảng [1,2,3] => [1,2,3]
    convertToArrSim(b, number - 1) => [1,2,3]
 */
//Set
const arr1 = [1, 2, 3, 4, 1, 1, 1, 2, 2, 2, 5, 6, 6, 7, 0];
let arrUni = [];
arr1.forEach(item => {
    if (!arrUni.includes(item)) {
        arrUni.push(item);
    }
})
console.log(arrUni);
//Set là một object chứ duy nhất 1 giá trị
const setObj = new Set();
setObj.add(1);
setObj.add("Minh Bui IT");
setObj.add(1); //nó vẫn hiện ra 1 cái duy nhất
//để truy xuất tất cả phần tử set dùng for of
for (let item of setObj) {
    console.log(`item: ${item}`); //item: 1 ; item: Minh Bui IT
}
console.log(setObj.size); //2
setObj.delete(1); //xóa 1 phần tử
setObj.clear(); //xóa ht phẩn tử
console.log(setObj);
//giải quyết unique arr nhanh chóng
const setObj2 = new Set(arr1);
console.log(setObj2);
//convert to arr
console.log([...setObj2]);