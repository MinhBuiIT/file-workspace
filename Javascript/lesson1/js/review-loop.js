const array = [1,1000,false,null,"evondev","",undefined,'javascript',[1,2,3],NaN];
const trueArr = array.filter((item) => Boolean(item) === true);
console.log(trueArr);
const complexArr = [[1,2,3,[false,null]],[1,5,6,['javascript']],[888,666,[90]]];
const flatArr = complexArr.flat(2);
console.log(flatArr);
//b3 dao nguoc so nguyen 1234 -> 4321; -123 -> -321
function reverseNumber(number) {
    let str = (number*Math.sign(number)).toString();
    let newStr = str.split('').reverse().join('');
    let newNumber = Number(newStr)*Math.sign(number);
    console.log(newNumber);
}
reverseNumber(1234);
function fizzBuzz(number) {
    for(let i=0;i<=number;i++) {
        if(i%2===0 && i%3===0) console.log('FizzBuzz');
        else if(i%3===0) console.log('Buzz');
        else if(i%2===0) console.log('Fizz');
        
    }
}
fizzBuzz(10);
function vowelCount(word) {
    let vowel = 'aoeui',
        count = 0;
        newWord = word.toLowerCase();
    for(let i=0;i < word.length;i++) {
        if(vowel.includes(newWord[i])) count++;
    }
    return count;
}
console.log(`So nhung nguyen am ${vowelCount('EVONDEV')}`);
function uniqueArr(arr) {
    if(!Array.isArray(arr)) return null;
    let newArr = [];
    for(let i=0;i<arr.length;i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(uniqueArr([1,2,3,1,1,1,2,2,3,5,5,6,7]));
function splitArr(arr,number) {
    let result = [];
    let a=0,
        b=number;
    while(a<arr.length) {
        result.push(arr.slice(a,b));
        console.log(result);
        a=a+number;
        b=b+number;
    }
    return result;
}
console.log(splitArr([1,2,3,4,5],2));
