//object literal
const objectLiteral = {};
//object contructor
const objectContructor = new Object();
//Vidu
const student = {
    name: 'GiaNghi',
    age: 19,
    male: true,
    'favorite-color': 'orange',
    hi: function () {
        console.log('Gia Nghi xau tanh');
    }
};
//Truy xuat
//C1 dot notation
console.log(student.name);
console.log(student.age);
// console.log(student.favorite-color); Loi
//C2 bracket notation
console.log(student["female"]);
console.log(student["favorite-color"]);
//Sua value trong object
student.name = 'MinhBui';
//Them key
student.isDeveloper = true;
student.hello = function() {
    console.log('Hello World');
}
//Xoa
delete student.hi;
delete student["favorite-color"];
console.log(student);
for (let keys in student) {
    let value = student[keys];
    console.log(`${keys}: ${value}`);
}
//method in object
let keysArr = Object.keys(student);
console.log(keysArr);
console.log(keysArr.length);

let valueArr = Object.values(student);
console.log(valueArr);

let entriesArr = Object.entries(student);
console.log(entriesArr); // tao ra mang nested [[key,value],[],[]]

const a = {
    firstName: 'Minh'
};
const b = {
    lastName: 'Bui'
};
//Gop hai Object
//C1 Object.assign
const c = Object.assign(a,b);
console.log(c);
//C2 pread operator
const d = {...a,...b};
console.log(d);

const footballer = {
    name: 'Ronaldo',
    age: 37
};
const newFootballer = Object.freeze(footballer);
newFootballer.age = 35;
console.log(newFootballer);// Khong sua duoc
//Sao chep Object
const user = {
    userName: 'MinhBuiIT',
    school: {
        name: 'CTU',
        deparment: {
            name: 'Information Technology'
        }
    }
};
// const newUser = user;hien cho user cung la 'MinhBuiDepTrai'
const newUser = {...user};
newUser.userName = 'MinhBuiDepTrai'; 
console.log(user);

//C2 assign
const newUser2 = Object.assign({},user);
newUser2.school.name = 'Đại Học Cần Thơ';
console.log(`newUser`);
console.log(newUser);
console.log(`newUser2`);
console.log(newUser2);
//Cả user va newuser deu bị ảnh hưởng
//Để không bị ảnh hưởng trong nested Object ta dung JSON
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = 'Đại học Cần Thơ CTU';
console.log(`newUser3: `);
console.log(newUser3);
//This -> đề cập object gần nhất
const student2 = {
    name: 'Gia Nghi',
    age: 19,
    female: true,
    hi: function () {
        console.log(`Her name is ${this.name} and she is ${this.age}`);
    },
    fullname: {
        name: 'Bùi Khả Minh',
    }
};
student2.hi();
//Optional Changing
console.log(student2.fullname?.name);
//Destructuring Object
const {name,age,female} = student2;// đúng tên key!!!
console.log(name,age,female);
//object with function
// function whatIsInfor(obj) {
//     console.log(obj.name,obj.age,obj.female);
// }
// const newObj =  {
//     name: 'Minh Bui',
//     female: false,
//     age: 19,
// }
// whatIsInfor(newObj);
//destructuring object with function
function whatIsInfor({name,age,female}) {
    console.log(name,age,female);
}
whatIsInfor({
    name: 'Minh Bui',
    female: false,
    age: 19,
})