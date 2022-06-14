const student = ['minh bui','kha',10,false,'kha'];
// const student = new Array();
console.log(student.length);
//lenght la do dai cua mang dem tu 0 = so luong phan tu mang
console.log(student[3]);
//index la vi tri cua pha tu mang bat dau tu 0
console.log(student[student.length - 1]);
// student.length = 0;
// console.log(student);
// Cac phuong thuc cua mang
console.log('------array.length-----');
console.log(student.length);
console.log('------array.reverse-----');
// console.log(student.reverse());
console.log('------array.join-----');//noi cac phan tu mang thanh string
console.log(student.join(' '));
console.log('------array.includes-----');//kiem tra co phan tu can tim trong mang ko tra ve true or false
console.log(student.includes(true));//false
console.log(student.includes('minh bui'));//true
console.log('------array.indexOf-----');
console.log(student.indexOf('kha'));//1 -> tim index cua value xuat hien dau tien
console.log('------array.lastIndexOf-----');
console.log(student.lastIndexOf('kha'));//4 -> tim index cua value xuat hien cuoi tien
console.log('------array.push-----');// them value o cuoi mang
student.push('javsscript');
console.log(student);
console.log('------array.unshift-----');// them value o dau mang
student.unshift('Developer');
console.log(student);
console.log('------array.pop-----');// xoa value o cuoi mang
student.pop();
console.log(student);
console.log('------array.shift-----');// xoa value o dau mang
student.shift();
console.log(student);