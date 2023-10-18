const person = {
    name: "Sekhar",
    age: 40,
    greet() { 
        console.log("Hey I am " + this.name);
    }
};


person.greet();