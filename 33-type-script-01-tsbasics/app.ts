const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;
//const numArray : number[] = [];
const numArray : Array<number> = [];
const stringArray : string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date}

interface ResultObj {
    val: number; 
    timestamp: Date
}

function Add(num1: NumOrString, num2: NumOrString){
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if (typeof num1  === 'string' && typeof num2  === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

buttonElement?.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = Add(+num1, +num2);
    numArray.push(result as number);
    const stringResult = Add(num1, num2);
    stringArray.push(stringResult as string);
    printResult({val: result as number, timestamp: new Date()});
    console.log(numArray);
    console.log(stringArray);

})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('IT WORKED!');
        }, 10000);
    });

function printResult(objResult: ResultObj){
    console.log(objResult.val, objResult.timestamp);
}

myPromise.then((result) => {
    console.log(result.split('W'));
});