// //b1: dao nguoc chuoi "My name is MinhBui" -> "Minh Bui is name My"
// const reverseString = function(str) {
//     if(typeof str != 'string') {
//         alert('Please, write your string');
//     }else {
//         return str.split(' ').reverse().join(' ');  
//     }
// }
// console.log(reverseString("My name is MinhBui"));
// //b2: dao nguoc tung tu cua chuoi "i love" -> "evol i"
// const reverseWord = function(word) {
//     if(typeof word != 'string') {
//         alert('Please, write your string');
//     }else {
//         let array = word.split(' ').reverse();
//         let arrayWord = array.map((w) => {
//             return w.split('').reverse().join('');
//         });
//         console.log(arrayWord.join(' '));
//     }
// }
// reverseWord('My name is MinhBui');
// //b3 In hoa chu cai dau trong chuoi "my name is minh bui" -> "My Name Is Minh Bui"
// function firstUppercase(b) {
//     if(typeof b != 'string') return 0;
//     return `${b.slice(0,1).toUpperCase()}${b.slice(1).toLowerCase()}`;
// }
// const capitalizeWord = function(string) {
//     if(!string) return null;
//     let result = string.split(' ').map((a) => firstUppercase(a)).join(' '));
//     console.log(result);
// }
// capitalizeWord("my name is minh bui");
