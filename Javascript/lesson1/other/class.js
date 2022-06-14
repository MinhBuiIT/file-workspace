//Constructor Function
function Person(name, age) {
    this.lastname = name;
    this.age = age;
}
const person1 = new Person('Minh', 19);
console.log(person1.lastname);
//Class
class Student {
    constructor(name, gender) {
            this.firstname = name;
            this.mygender = gender;
        }
        // getName() {
        //     return this.firstname;
        // }
        // setName(newName) {
        //     this.firstname = newName;
        // }
        //getter setter
    get getName() {
        return this.firstname;
    }
    set changeName(newName) {
        return this.firstname = newName;
    }
}
const student1 = new Student('Vinh', 'male');
console.log(student1.mygender);
// console.log(student1.getName());
// student1.setName('Vinh Bui')
// console.log(student1.firstname); //Vinh Bui
console.log(student1.getName); //ko can có dấu ngoặc
student1.changeName = 'Bui Huu Vinh';
//Class expression
let School = class {
    constructor(name, place) {
        this.name = name;
        this.pos = place;
    }
    get getName() {
        return this.name;
    }
}
const school1 = new School('CTU', 'Cần Thơ');
console.log(school1.getName);
//truyền class vào parameters trong function
function company(aClass) {
    return new aClass();
}
const manager = company(class {
    getCEO() {
        console.log('Bui Kha Minh');
    }
    constructor() {
        this.love = 'abc';
    }
})
manager.getCEO();
console.log(manager.love);
//static method: bị ràng buộc bởi class và nó ko bị ảnh hưởng bất kì instance của class; truy xuất từ chính classname
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(a, b) {
        return a.date - b.date; //sắp xếp tăng dần
    }
}
const arrTitle = [new Article('HTML', new Date(2021, 4, 3)), new Article('CSS', new Date(2021, 4, 2)), new Article('JS', new Date(2021, 4, 1))];
arrTitle.sort(Article.compare);
console.log(arrTitle[0].title); //JS vì có thời gian sớm nhất

class staticClass {
    constructor(name) {
        this.name = name;
    }
    static nameGender(gender) {
            let newName = gender === 'male' ? 'Hoàng' : 'Trúc';
            return new staticClass(newName);
        } //ko phụ thuộc vào class
}
// staticClass.nameGender('male');
const exp = staticClass.nameGender('male');
console.log(exp.name);
//static properties
//className.staticPropertyName để truy cập static properties ở trong methor
//this.constructor.staticPropertyName or className.staticPropertyName để truy cập static properties ở trong constructor
class Item {
    constructor(objects) {
        this.objects = objects;
        this.constructor.count++;
    }
    static count = 0;
    static getCount() {
        return Item.count;
    }
}
const mac = new Item('Mac');
console.log(Item.count); //1
console.log(Item.getCount()); //1
const iphone = new Item('Iphone');
console.log(Item.count); //2
console.log(Item.getCount()); //2
//extends && super
console.log('------------------------------extends and super--------------------------');
class Animal {
    constructor(numberLegs) {
        this.legs = numberLegs;
    }
    walking() {
        console.log(`walking by ${this.legs} legs`);
    }
}
class Bird extends Animal {
    constructor(numberLegs) {
        super(numberLegs); //kế thừa this.legs
    }
}
const bird = new Bird(2);
console.log(bird.legs);
bird.walking();