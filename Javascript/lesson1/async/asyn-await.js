function wait(str, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str);
        }, timer)
    })
}
// const promise1 = wait('fisrt', 0);
// const promise2 = wait('', 4000);
// const promise3 = wait('second', 0);
// promise1.then((data) => {
//         console.log(data);
//         return promise2;
//     })
//     .then((data) => {
//         console.log(data);
//         return promise3;
//     })
//     .then((data) => {
//         console.log(data);
//     })
// async function run() {
//     console.log('fisrt');
//     await wait(4000);
//     console.log('second');
// }
// run();
// //narrow function
// let wait2 = async() => {
//     await wait(200);
// }
// let object = {
//     name: async function() {
//         await wait(2000);
//     },
//     async age() {
//         await wait(100)
//     },
//     height: async() => {
//         await wait(100);
//     }
// }
async function run() {
    // let promise1 = wait('first', 1000);
    // let promise2 = wait('second', 2000);
    // promise1.then((data) => console.log(data));
    // thay vì như vậy ta dùng async await
    // let promise1 = await wait('first', 1000);
    // let promise2 = await wait('second', 4000);
    // console.log(promise1);first
    //dùng Promise.all để in ra tất cả khi resolve trong async await dùng như sau:
    let promise1 = wait('first', 1000);
    let promise2 = wait('second', 2000);
    let [a, b] = await Promise.all([promise1, promise2]);
    console.log(a, b);
}
// run();
function isFrontEndDev(arr) {
    return new Promise(function(resolve, reject) {
        if (!arr.includes('html')) {
            reject('you are not frontend dev');
        } else {
            resolve('you are frontend dev');
        }
    })
}
//Dùng Promise thì như thế này
// isFrontEndDev(['css'])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//Dùng async...await
async function go() {
    //để kt lỗi như catch ta dùng try...catch
    //c1  // try {
    //     let pro1 = await isFrontEndDev(['css']);
    //     return pro1;
    // } catch (error) {
    //     console.log(error);
    // }
    let pro1 = await isFrontEndDev(['css']);
    return pro1;
}
//hoac
//c2
function printErr(err) {
    console.log(err);
}
go().catch(printErr);