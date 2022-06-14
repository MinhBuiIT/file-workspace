//kiểm tra object
const student = {
    name: "Minh Bui",
    age: 19,
}
function isObject(obj) {
    if(typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
        return true;
    }
    return false;
}
function convertObjToArr(obj) {
    if(!isObject(obj)) return;
    // let arr = Object.entries(obj);
    // return arr;

    // const arr = Object.keys(obj).map((item) => [item,obj[item]]);
    // return arr;
    let arr = [];
    for(let key in obj) {
        // if(Object.hasOwnProperty(key)) {
        // }
        arr.push([key,obj[key]]);
    }
    return arr;
}
// console.log(convertObjToArr(student));
//b3
function deleteKey(obj,key) {
    if(!isObject(obj)) return;
    let objFun = {...obj};
    for(let keyObj in objFun) {
        if(keyObj === key) {
            delete objFun[keyObj];
        }
    }
    return objFun;
}
// console.log(deleteKey(student,'age'));
//b4
function isEqualObj(obj1,obj2) {
    if(!isObject(obj1) || !isObject(obj2)) return false;
    // let arr1  = Object.keys(obj1);
    // let arr2  = Object.keys(obj2);
    // if(JSON.stringify(arr1) !== JSON.stringify(arr2)) return false;
    // for(let key in obj1) {
    //     if(obj1[key] !== obj2[key]) return false;
    // }
    // return true;
    if(JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
    return false;
}
console.log(isEqualObj({a:1,b:2},{a:1,d:2}));