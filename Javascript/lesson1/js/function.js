//function
//Cu phap (Syntax): function functionName(parameters, parameters) {
// Your Code here
//}
function sum(a,b) {
    const total = a + b;
    return total; 
}
console.log(sum(5));// 5 + undefined -> NaN
function minus(c,d=8) {
    const isMinus = c - d;
    return isMinus; 
}
console.log(minus(10));//2
//goi function: invoke function -> functionName(arguments)
const k = sum;
k(200, 300);
console.log(k(200, 300));
function average(a,b,fn) {
    return fn(a,b) / 2;
}
console.log(average(200,300,sum));
//Anomunos function
const logName = function() {
    console.log('Your Name');
}
logName();
//IIFE immediately invoked function execution
(function(){
    console.log('IIFE');
})();

if(2 > 1) {
    var message = 'Hello Minh';
}
// alert(message);
//LEXICAL SCOPE
let lastName = 'Bui';
function fullName() {
    let firstName = 'Minh';
    console.log(`${firstName} ${lastName}`);
}
//Vi sao goi duoc bien lastname trong function fullName : vi lexical scope cua bien lastname va function fullName cung cap la global scope nen co the goi bien lastname vao function fullName
fullName();
//CLOSURE
//c1:
function love() {
    let sayHe = 'I love ';
    function girlfriend() {
        let nameGirl = '...';
        console.log(`${sayHe} ${nameGirl}`);
    }
    return girlfriend();
}
love();
//c2
function hello(message3) {
    return function hi(message4) {
        console.log(`${message3} ${message4}`);
    }
}
let sayHello = hello('Hello');
sayHello('Hi');