const newStr = 'I am Minh Bui and I will be Fullstack Developer';
// console.log(newStr);
const fullname = 'Minh Bui';
const job = 'Fullstack Develpoper';
// C1
const newStr2 = 'I am ' + fullname + ' and I will be ' + job;
//console.log(newStr2);
// C2
// ${variable}
const newStr3 = `I am ${fullname} and I will be ${job}`;
//console.log(newStr3);
//ten_bien.length
const emty = '';
// console.log(fullname.length);

const myStr = 'Fullstack Developer D';
console.log(myStr);
console.log(myStr.split(' '));//["Fullstack","Developer"]
console.log(myStr.split(''));
console.log(myStr.split('/'));
console.log(myStr.toLowerCase());//fullstack developer
console.log(myStr.toUpperCase());  //FULLSTACK DEVELOPER
console.log(myStr.startsWith('Fullstack'));// true
console.log(myStr.endsWith('Developer'));// true
console.log(myStr.includes('frontend'));// false
console.log(myStr.indexOf('D'));//10
console.log(myStr.lastIndexOf('D'));// 20
console.log(myStr.replace("Fullstack","fullstack"));
console.log(myStr.repeat(4));
//slice(start,end+1);
console.log(myStr.slice(0,9));//Fullstack
console.log(myStr.slice(-5));//per D
const myStr2 = "      Minh Bui     ";
console.log(myStr2);
console.log(myStr2.trim());// remove space right and left
console.log(myStr2.trimStart());//remove space left
console.log(myStr2.trimEnd());//remove space right
console.log(myStr.charAt(0));//F
const str = 'Frontend';
//substr(index, length); ko khuyen khich su dung
console.log(str.substr(1,5));// ronte
//substring(indexStart, indexEnd-1)
console.log(str.substring(5,1));// ront
console.log(str.slice(5,1));// 
console.log(str.substring(1,5));// ront
const myStr3 = '      Frontend Developer D     ';
console.log(myStr3.trim().replace('Developer D','Designer ').toUpperCase().repeat(2));
console.log(`Result of mystr3: ${myStr3.trim().replace('Developer D','Designer ').toUpperCase().repeat(2)}`); 

