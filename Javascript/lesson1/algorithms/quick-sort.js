//array = [3,5,2,1,7,6]
/**Chia để sắp xếp:
 * flat thường dùng vị trí đầu tiên
 * flat = array[0] = 3;
 * sắp xếp bên nhỏ hơn 3, bên lớn hơn 3
 * 2 1 flat(3) 5 7 6
 * mình sẽ sắp xếp lại từng bên dùng đệ qui trả về 1 mảng tổng hợp
 */
const array = [3,5,2,1,7,6];
function quickSort(array) {
    if(array.length<2) return array;
    let cloneArr = array.slice();
    let flat = cloneArr[0];
    let better = cloneArr.filter((item) => item>flat);
    let smaller = cloneArr.filter((item) => item<flat);
    return [...quickSort(smaller),flat,...quickSort(better)];
}
console.log(quickSort(array));
