//b1
function convertUpperFirstWord(text) {
    if(typeof text !== "string" || text === "") return;
    let arrText = text.toLowerCase().split("");
    arrText[0] = arrText[0].toUpperCase();
    let newText = arrText.join("");
    return newText;
}
// console.log(convertUpperFirstWord(123));
//b2
function compare(a,b) {
    if(typeof a !== "number" || typeof b !== "number") return null;
    return Math.max(a,b);
}
function printNumber(number) {
    return `Max value is ${number}`;
}
function useCallback(a,b,callback) {
    let max = compare(a,b);
    return callback(max);
}
console.log(useCallback(9,10,printNumber));