//b1 kiểm tra value có phải object
function testObject(value) {
    if(typeof value == 'object' && value !== null && !Array.isArray(value)) return true;
    return false;
}
console.log(testObject({}));
//b2 {a: 1,b: 2} => [["a",1],["b",2]]
function objToArr(object) {
    if(!testObject(object)) return;
 /* cách 1    const value = Object.entries(object);
    return value;
*/
/*    const value = Object.keys(object).map((key) => [key,object[key]]);
    return value;
*/
    const result = [];
    for (let key in object) {
        if(object.hasOwnProperty(key)) {
            result.push([key,object[key]]);
        }
    }
    return result;
}
console.log(objToArr({a: 1,b: 2,c: 3}));
//b3 
function deleteKey(obj,...rest) {
    if(!testObject(obj)) return;
    const copyObj = {...obj};
    // for(let keys in copyObj) {
    //     for(let item of rest) {
    //         if(item === keys.toString()) {
    //             delete copyObj[keys];
    //         }
    //     }
    // }
    // console.log(obj);
    // return copyObj;
    rest.forEach((item) => {
        delete copyObj[item];
    })
    return copyObj;
}
console.log(deleteKey({a: 1,b: 2,c: true,k: 4},'a','b','k'));
//b4 
function isEqualObject(obj1,obj2) {
    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);
    if(objkey1.length !== objkey2.length) return false;
    const result = objkey1.every((key) => obj1[key] === obj2[key]);
    return result;
}
console.log(isEqualObject({a: 1,b: 2},{a: 3,b: 2}));
