const person = {
    name: "Sekhar",
    age: 40,
    greet() { 
        console.log("Hey I am " + this.name);
    }
};
const hobbies = ['singing', 'danching'];
const copiedHobbies = [...hobbies];
const copiedPerson = {...person};

console.log(copiedHobbies);
console.log(person);



