const name = "Sekhar";
let age = 40;
const hasHobbies = true;

//older way
const userSummary = function(userName, userAge, userHasHobbies){
    return(
        "User name is " + userName + " & user's age is " + userAge + " and the user has hobbies " + userHasHobbies     
        );
}

console.log(userSummary(name, age, hasHobbies));

const userSummaryArrow = (userName, userAge, userHasHobbies) =>{
    return(
        "User name is " + userName + " & user's age is " + userAge + " and the user has hobbies " + userHasHobbies     
        );
}

console.log(userSummaryArrow(name, age, hasHobbies));

//Normal Add function
function normalAdd(a,b){
    return a + b;
}
console.log("Normal add " + normalAdd(1, 2));

const arrowAdd = (a, b) => {
    return a + b;
}

console.log("Arrow add " + arrowAdd(1, 2));

//Arrow function with two arguments and single return statement:
const addwithNoReturn = (a,b) => a+b;
console.log("Add with no return" + addwithNoReturn(1,2));

//Arrow function with single argument and single return without curly braces
const addSingleArgument =  a => console.log(a);
addSingleArgument("Single argument!!!");

//Arrow function with single argument and single return
const noArgument = ()  => console.log("No Argument!!!");
noArgument();
