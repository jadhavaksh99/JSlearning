const personalDetails = {
    name: 'Akshay',
    number: '9075531819',
    email: 'jadhavaksh99@gmail.com',
}

const collegeDetails = {
    collegeName: 'GHRCEM',
    university: 'Pune',
    passingYear: '2016',
    branch: 'EnTC'
}
const details = Object.assign({}, personalDetails, collegeDetails);
console.log("==========3.=============");
console.log(`My full details `, details);
const myFriends = ['arvind', 'ganesh', 'ajay', 'kaushal'];
Object.freeze(myFriends);
console.log("====================5======================");
for (const iterator of myFriends) {
    console.log(iterator);
}

console.log("++++++++++++++++++++62=================");
const company = "Codemind Technology";
const companyArray = company.split(" ");

var tech = "";
for (let index = companyArray[1].length - 1; index >= 0; index--) {    
    tech = tech + companyArray[1][index];
}
console.log(tech);

