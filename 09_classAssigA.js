class Vehicle{
    //Properties
    color
    brand
    model
    average
    engineType
    //Constructor
    constructor(color, brand, model, average, engineType){
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.average = average;
        this.engineType = engineType;
    }
    //Methods
}

const hondaCity = new Vehicle('white', 'honda', 'city', 16, 'BS6');
const tataNexon = new Vehicle('grey', 'tata', 'Nexon', 18, 'BS6');
const tataNano = new Vehicle('yellow', 'tata', 'nano', 23, 'BS4');
const marutiSuzuki = new Vehicle('blue', 'suzuki', 'breeza', 20, 'BS6');

console.log("========================1.=====================================");
arrayOfVehicles = [hondaCity, tataNexon, tataNano, marutiSuzuki]
for (const element of arrayOfVehicles) {
    //If I want to print arrayname in output how to print
    console.log(`Car color is ${element.color}, brand name is ${element.brand}, model is ${element.model}, avarage will be ${element.average} and uses Engine type ${element.engineType}.`);
}
console.log(arrayOfVehicles);
console.log(hondaCity);
console.log("==========================2.================");

class College{
    name
    location
    rankInIndia
    lastYearResult
    constructor(name, location, rankInIndia, lastYearResult){
        this.name = name;
        this.location = location;
        this.rankInIndia = rankInIndia;
        this.lastYearResult = lastYearResult;
    }
    //Methods
    display(){
        console.log(`college details: ${this.name}, ${this.location}, ${this.rankInIndia}, ${this.lastYearResult}`);
    }
}
COEP = new College('coep', 'Pune', '10th', '100%');
symbiosys = new College('SIBM', 'Pune', '30th', '89%');
VJTI = new College('VJTI', 'Mumbai', '1st', '95%');
DonBoscho = new College('DonBoscho', 'Thane', '89th', '78%')

COEP.display();
symbiosys.display();
VJTI.display();
DonBoscho.display();

console.log("=============================3.=========");

function traverseObject(element){
    for (const index in element) {
        console.log(`${index}:${element[index]}`);
        
    }
}

console.log("========3.1==================");

traverseObject(COEP)