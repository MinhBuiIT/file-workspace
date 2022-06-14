//khai báo
const regex1 = /hello/;
const regex2 = new RegExp("hello");
console.log(regex1.test('hello world'));
//Achor ^ $
/hi$/.test('minhbui hi');
/hi^/.test('minhbui hi');
//ranges
/[a-z]/.test('abcbbA');
//quatifers
const str1 = "bcnaomma 1234";
console.log(str1.match(/\d{2,3}/)[0]);
console.log(str1.match(/\d*/g));//['', '', '', '', '', '', '', '', '', '1234', '']
const str2 = "1234";
console.log(str2.match(/\d*/g));//['1234','']
console.log(str2.match(/\d+/g));//['1234']
console.log(str2.match(/\d?/g));//['1', '2', '3', '4', '']
const str3 = 'color or colour?';
console.log(str3.match(/colou?r/g));
//group ()
const regex3 = /(\d{3})/;//phải có 3 kí tự số
console.log(regex3.test('12'));//false
console.log(regex3.test('123'));//true
const regex4 = /(\d{3})(\w+)/;//phải có 3 kí tự số và sau đó là kí tự hoặc số hoặc dấu gạch dưới
console.log(regex4.test('123'));//false
console.log(regex4.test('123bac'));//true
const regex5 = /(\d{3})?(\w+)///3 kí số đầu có hoặc không đều được và sau đó là kí tự hoặc số hoặc dấu gạch dưới;
console.log(regex5.test('123'));//true
//tác dụng regex với string
const str4 = "hello my name is minh, hello everybody hello";
let str5 = str4.replace("hello","hi");
console.log(str5);//hi my name is minh, hello everybody
//nó chỉ thay thế đc 1 chữ hello
let str6 = str4.replace(/hello/g,'hi');
console.log(str6);//hi my name is minh, hi everybody hi
'welcome to 1234567'.match(/\d+/g);//['1234567']
