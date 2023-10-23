let firstName = "Gajanan";
let lastName = "Kharat";

let myName = firstName; // Deep Clone

console.log(myName);
firstName = 'GK';
console.log(myName);

myName = 'Ganesh';

let person = {
    name: 'Elon',
    city: 'Pune',
    isMarried : true
}
let elonPerson = {
    country: "USA"
}
elonPerson = person; // Shallow clone

elonPerson.city= "Mumbai";
console.log(elonPerson.city); // 
console.log(person.city);
let stdNagesh = {
    name: 'Nagesh',
    age: 22,
    graduation: "BE - Computer Science"
}

let stdGanesh = { ...stdNagesh}; // Deep clone using spread operator
stdGanesh.name = "Ganesh";

console.log(stdNagesh.name);