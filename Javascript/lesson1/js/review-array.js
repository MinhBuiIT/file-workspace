function reverseStr(str) {
    if (!str) return null;
    console.log(str.split(' ').reverse().join(' '));
}
reverseStr('My name is MinhIT');
function reverseWord(string) {
    if(!string) return null;
    console.log(string.split('').reverse().join(''));
}
reverseWord('i love');
function firstUppercase(b = '') {
    if(typeof b != 'string') return 0;
    return `${b.slice(0,1).toUpperCase()}${b.slice(1).toLowerCase()}`;
}
function capitallize(str) {
/*    let arr = str.split('');
    let newArr = [];
    newArr.push(arr[0].toUpperCase());
    for(let i=1;i<arr.length;i++) {
        newArr.push(arr[i]);
        if(arr[i] === ' ') {
            newArr.push(arr[i+1].toUpperCase());
            i++;
        }
    }
    console.log(newArr.join(''));
*/
    let arr = str.split(' ');
    let newArr = arr.map((item) => firstUppercase(item));
    console.log(newArr.join(' '));
}
capitallize('my name is minh bui kha');
