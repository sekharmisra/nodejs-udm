const name = "Sekhar";
let age = 40;
const hasHobbies = true;

function userSummary(userName, userAge, userHasHobbies){
    return(
        "User name is " + userName + " & user's age is " + userAge + " and the user has hobbies " + userHasHobbies     
        );
}

console.log(userSummary(name, age, hasHobbies));

