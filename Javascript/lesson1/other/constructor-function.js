//Object Literal
const student = {
        name: 'Nghi Su',
        age: 91,
    }
    //nếu muốn tạo nhiều object có cấu trúc v thì cực => dùng constructor function (viết hoa chữ cái đầu)
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
            return name + ' ' + age;
        }
        //this này trỏ đó empty obj roi mình tự gán vào
}
const student2 = new Student('Minh đẹp trai', 19);
console.log(student2.greet());
//trong obj literal nếu ta gán cho biến nếu ta thay đổi giá trị của 1 biến đã gắn sẽ ảnh hưởng đến biến còn lại
const student3 = student;
student3.name = 'Nghi lì';
console.log(student.name); //Nghi lì
//trong Constructor Function thì ta có thể tùy ý thay đổi mà ko ảnh hưởng đến biến còn lại;
const student4 = new Student('abc', 20);
student4.name = 'xyz';
console.log(student2.name); //Minh đẹp trai
console.log(student4.name); //xyz
//get set in obj
// const Person = {
//     firstname: 'Minh',
//     get getName() {
//         return this.firstname;
//     }
// }
// console.log(Person.getName);
const Person = {
    firstname: 'Minh',
    set changeName(newName) {
        return this.firstname = newName;
    }
}

Person.changeName = 'Vinh';
console.log(Person.firstname);
//Prototype
console.log('------------------Prototype----------------------');
//prototype có nghĩa là cha,mục đích để kế thừa. Mọi thứ trong js đều là obj ngoài trừ undefined nên Object.prototype là lớn nhất
let str = 'abc';
String.prototype.muliti = function(item) {
        return this + item;
    }
    // chúng ta sẽ tạo một prototype là muliti và str sẽ kế thừa và dùng lại
console.log(str.muliti('xyz'));

function Girl() {
    this.firstname = 'Nghi';
    this.lastname = 'Nguyễn';
    // this.gender = 'female'//nếu trong constructor function có properties trùng mới prototype thì sẽ ưu tiên cho properties của constructor function 
    this.greet1 = this.greet();
}
Girl.prototype.greet = function() {
        return 'Hi I am ' + this.firstname + this.lastname;
    }
    //global Obj
Object.prototype.work = function() {
    return 'Teacher';
}
let girlfriend = new Girl(); //prototype là Girl.prototype còn nếu tạo obj bàng literal thì prototype là Object.prototype
console.log(girlfriend.firstname);
console.log(girlfriend.greet1); //Hi I am NghiNguyễn
console.log(girlfriend.work()); //Teacher
//Vai trò prototype để add một properties mới cho contructor function
Girl.prototype.gender = 'male';
console.log(girlfriend.gender); //male