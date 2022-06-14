//By value -> gia tri thuc duoc luu vao vung bo nho
const a = 1,b=1;
console.log(a === b);//true
//By referrences -> chi vung bo nho
const arr1 = [1,2];
const arr2 = [1,2];
console.log(arr1 === arr2);//false
//JSON : Javascript object Notation
//JSON.stringify(value) -> chuyen doi sang thanh JSON string
//JSON.parse(value) -> chuyen doi JSON string thanh mang
console.log(JSON.stringify([1,2,3]));//"[1,2,3]"
console.log(JSON.parse("[1,2,3]"));//[1,2,3]
//so sanh hai mang ta chuyen doi sang JSON string roi so sanh
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));//true
//sao chep mang
const student = ['a','b','c','d','e'];
//c1 dung slice
const sliceStudent = student.slice();
console.log(sliceStudent);
//C2 PREAD OPERATOR
const preadStudent = [...student];
console.log(preadStudent);
const arr3 = [3,4];
const arr4 = [6,5];
const arr5 = [8,7];
//c1
const concatArr = arr3.concat(arr4,arr5).sort((a,b) => a>b?1:-1);//sort de sx tang dan
console.log(concatArr);
//c2
const preadArr = [...arr3,...arr4,...arr5];
console.log(preadArr);
//destructuring array
const fiveElement = ['fire','water','siler','wood','ground'];
const [x,y,z] = fiveElement;
console.log(x,y,z);
//rest parameters
const [fire,...rest] = fiveElement;
console.log(rest);//['water', 'siler', 'wood', 'ground']
function demo(a,...b) {
    console.log(b);
}
demo(1,2,3,4,5);//[2, 3, 4, 5]

