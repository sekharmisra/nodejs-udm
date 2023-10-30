"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
//const numArray : number[] = [];
const numArray = [];
const stringArray = [];
function Add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = Add(+num1, +num2);
    numArray.push(result);
    const stringResult = Add(num1, num2);
    stringArray.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numArray);
    console.log(stringArray);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('IT WORKED!');
    }, 10000);
});
function printResult(objResult) {
    console.log(objResult.val, objResult.timestamp);
}
myPromise.then((result) => {
    console.log(result.split('W'));
});
