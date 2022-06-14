// Ham Number
console.log(Number('5'));//chuyen tu kieu string sang number ->5
console.log(Number(undefined));//NaN
console.log(Number('abc'));//NaN
console.log(Number(null));//0
console.log(Number(false));//0
console.log(Number(true));//1
// Ham string
console.log(String(4));//"4"
console.log(String(NaN));//"NaN"
//Ham Boolean
console.log(`Boolean of zero: ${Boolean(0)}`);//false
console.log(`Boolean of zero: ${Boolean(false)}`);//false
console.log(`Boolean of zero: ${Boolean(undefined)}`);//false
console.log(`Boolean of zero: ${Boolean("")}`);//false
console.log(`Boolean of zero: ${Boolean(NaN)}`);//false
console.log(`Boolean of zero: ${Boolean(null)}`);//false
//con nhung cai khac la true het

//type coercion
console.log(null + "1");// -> "null1"
console.log(10 + 10);// 20
console.log(10 + "10");//"1010"
console.log(null + "");//"null"
console.log(null + NaN);//NaN
console.log(null + NaN);//NaN
console.log(undefined + null);//NaN
console.log(2 - 1);//1
console.log("2" - 1);//1
console.log(false - 1);//-1
console.log(undefined - 1);//NaN

//== & ===
console.log("== & ===")
console.log(10 == "10");//true
console.log(1 == "01");//true
console.log(true == 1);//true
console.log(null == "");//null -> "null" ->false
console.log(null == undefined);//true
console.log(0 == false);//true
console.log(true == "true");//false

console.log(10 === "10");//false
console.log(null === 0);//false
