let isSuccess = true;
let willBuyPhone = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (isSuccess) {
                resolve('I had had new phone');
            } else {
                reject('I dont had new phone');
            }
        }, 0)
    })
    // console.log(willBuyPhone);

function Phone(boolean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (boolean) {
                resolve('I had had new phone');
            } else {
                reject('I don\'t had new phone');
            }
        }, 2000)
    })
}
// let myPhone = Phone(false);
//then(onFulfilled,onReject)
// myPhone.then(
//         (success) => console.log(success),
//         // (reject) => console.log(reject)
//     )
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('True or False always runs this code here');
//     })
//Callback Hell: gọi nhiều callback trong 1 function gây ra rối code khó thể hiểu
// setTimeout(() => {
//     console.log('first time');
//     setTimeout(() => {
//         console.log('second times');
//         setTimeout(() => {
//             console.log('third times');
//         }, 1000)
//     }, 1000)
// }, 3000)
new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('first time');
        }, 3000);
    })
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('second time');
            }, 1000);
        })
    })
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('third time');
            }, 1000);
        })
    })
    .then((result) => {
        console.log(result);
    })

function makePromise(timer, str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str);
        }, timer)
    })
}
const promise1 = makePromise(2000, 'first time');
const promise2 = makePromise(1000, 'second time');
const promise3 = makePromise(3000, 'third time');
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error2')
    }, 4000)
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error1')
    }, 4000)
});
//Promise.all
let promiseTotal = Promise.all([promise1, promise2, promise3]).then((data) => { //Promise.all[arg1,...] static method;data là mảng
    console.log(data); //sau 3s ['first time', 'second time', 'third time']
})
let promiseTotal2 = Promise.all([promise1, promise4, promise5]).catch((data) => { //Promise.all[arg1,...] static method;data là mảng
        console.log(data); //khi có 1 promise reject thì nó sẽ chạy reject đó,nếu có 2 reject nó sẽ ưu tiên cái đc đặt trc //Error2
    })
    // Promise.race
let promiseRace = Promise.race([promise1, promise2, promise3]).then((data) => { //chạy cái promise nào có thời gian ngắn nhất
        console.log(data); //second time do có promise gần nhất
    })
    //Promise.allSettled
let promiseallSettled = Promise.allSettled([promise1, promise4, promise5]).then((data) => {
    console.log(data); //trả về mảng gồm các object (3) [{…}, {…}, {…}]
    // 0: {status: 'fulfilled', value: 'first time'}
    // 1: {status: 'rejected', reason: 'Error1'}
    // 2: {status: 'rejected', reason: 'Error2'}
    // length: 3
    // [[Prototype]]: Array(0)
    //trả về tất cả những promise ko phân biệt resolve hay reject
})

function isFrontEndDev(arr) {
    if (!arr.includes('html')) {
        throw new Error('you are not frontend dev');
    }
    return new Promise(function(resolve, reject) {
        resolve('you are frontend dev');
    })
}
try {
    isFrontEndDev(['css'])
        .then((data) => {
            console.log(data);
        })
        .catch((data) => {
            console.log(data);
        })

} catch {
    console.log('Error'); // khi có lỗi sẽ chạy scope này
} finally {
    console.log('All'); //lỗi hay đúng đều in ra
}