//slice: tao mang moi tu mang da cho
const animals = ['lion','tiger','horse','elephant'];
//.slice() tao mang moi
const animals2 = animals.slice();
console.log(animals2);
//.slice(number) tao mang tu index = number
const animals3 = animals.slice(1);
console.log(animals3);
//.slice(start,end) tao mang moi tu start den indexEnd-1;
const animals4 = animals.slice(1,3);
console.log(animals4);
//.slice(negative)
const animals5 = animals.slice(-3);
console.log(animals5);
//splice
const pets = ['dog','cat','bird','pig'];
// const pets2 = pets.splice(2);
// console.log(pets2);//['bird', 'pig']
// console.log(pets);//['dog', 'cat']

//splice(start,deleteCount);
console.log(';;;')
const pets3 = pets.splice(0,1);
console.log(pets);//['pig']
//splice(start,deleteCount,item1,item2,itemN)
// const pets4 = pets.splice(0,2,'dragon',false,true,0);
// console.log(pets);
//sort
console.log('-------array.sort-------')
const random = [1,12,5,4,999];
const random2 = random.sort();
console.log(random2);//[1, 12, 4, 5, 999]
//c1 sap xep mang giam dan
const random3 = random.sort(function(a,b) {
    if(a > b) return -1;// khong doi vi tri cho nhau
    if(a < b) return 1;//doi vi tri cho nhau
    return 0;//giu nguyen
})
console.log(random3);//[999, 12, 5, 4, 1]
const random4 = random.sort((a,b) => a>b?1:-1);
console.log(random4);//[1, 4, 5, 12, 999]
const nickName = ['minh','nam','nguyen'];
const nameArange = nickName.sort(function(a,b) {
    return a.length - b.length;
});
console.log(nameArange);
// số dương đổi chỗ cho nhau
console.log('------Array.find-------');
// tra ve phan tu dau tien thoa dieu kien
const numbers = [1,7,999,100,2];
const yourNumber = numbers.find((element) => element > 1000);
//Neu ko co phan tu nao thoa se tra ve undefined
console.log(yourNumber);//67
console.log('------Array.findIndex-------');
const yourIndexNumber = numbers.findIndex((element) => element > 1000);
//Neu ko co phan tu nao thoa se tra ve -1
console.log(yourIndexNumber);//1
console.log('------Array.map-------');
const banKinh = [1,30,20];
//c1
// const dienTich = (r) => {
//     let result = Math.PI*r*r;
//     return Number(result.toFixed(2));
// };
// const dienTichHinhTron = banKinh.map(dienTich);
// console.log(dienTichHinhTron);
//c2
const dienTichHinhTron = banKinh.map((r) => {
    let result = Math.PI*r*r;
    return Number(result.toFixed(2));
});
console.log(dienTichHinhTron);
console.log('------Array.forEach-------');
const listNumber = [1,2,3,4,5];
const doubleNumber = listNumber.forEach((value,index,array) => {
    return value*2;
});
console.log(doubleNumber);//undefined
console.log('------Array.filter-------');
//sang loc ra cac value thoa dieu kien
const thanZero = listNumber.filter((item) => item > 3);
console.log(thanZero);//[ 4, 5]
console.log('------Array.some-------');
const someNumber = listNumber.some(a => a > 3);
console.log(someNumber);//true
console.log('------Array.every-------');
const everyNumber = listNumber.every(a => a > 3);
console.log(everyNumber);//false
//tra ve true false
console.log('------Array.reduce-------');
//gom tat ca phan tu mang thanh mot
//tinh tong cac phan tu mang
const sumNumber = listNumber.reduce( function(previousValue,currentValue){
    console.log(previousValue,currentValue);
    return previousValue + currentValue;
},0);
console.log(sumNumber);
