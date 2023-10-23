let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune",
    pin: 431202
 };
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// const city = person.city;

let {name, age, isMarried, city, country="Bharat"} = person;
console.log(name, age, isMarried, city, country);