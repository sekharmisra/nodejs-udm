//object restructing 
const person = {
    name: "Sekhar",
    age: 40,
    greet() { 
        console.log("Hey I am " + this.name);
    }
};

//Without objecct destructuring
const printName = (personData) => {
    console.log(personData.name);
}
printName(person);

//with Object destructuring
const printName1 = ({name}) => {
    console.log(name);
}
printName1(person);

const { name, age} = person;
console.log(name, age);

//Array destructuring
const hobbies = ['singing', 'danching'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
