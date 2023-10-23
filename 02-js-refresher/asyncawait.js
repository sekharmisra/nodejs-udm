function isPrimeNumber(number){
    let j=0;
    for(let i=2; i < number; i++){
        j++;
        if (number % i === 0){
            return{
                "isPrime": false,
                "divisibleBy": i,
                "iterations": j
            }
        }
    }
    return {
        "isPrime": true
    }
}

function isPrimePromise(number){
    return new Promise( (resolve, reject)  => {
        if (number > 413158523){
            reject({"Error": "Number too large!"});
        }
        else{
            setTimeout(() => resolve(isPrimeNumber(number)), 0);
        }    
    });
}

async function testAsyncAwaitPromise(){
    console.log("First test");
    const r1 = await isPrimePromise(413158523);
    console.log(r1);

    console.log("Second test");
    const r2 = await isPrimePromise(413158523);
    console.log(r2);

    console.log("Third test");   
    const r3 = await isPrimePromise(413158523);
    console.log(r3);

    console.log("Final test");
    const r4 = await isPrimePromise(413158523);
    console.log(r4);    
}

testAsyncAwaitPromise();