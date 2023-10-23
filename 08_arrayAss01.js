let arrayNumbers = [22, 11, 44, 55, 77, 33];
count = 0
console.log("=============1. Even positioned value in Array are=========");
for (let index = 1; index <= arrayNumbers.length - 1; index = index + 2) {
    //console.log(arrayNumbers[index]);
    const element = arrayNumbers[index];     
    console.log(element);
}
console.log("==============================2.=======================");
for (let index = 0; index <= arrayNumbers.length - 1; index++) {
    const element = arrayNumbers[index];
    count = element + count;
}
console.log(`Sum of array elements at even position is ${count}`);

console.log(`====== splice() to insert element =========`);

var arrayNumber = [22, 11, 44, 55, 77, 33];

// Insert element 99 at index 2 ==> [22, 11, 99, 44, 55, 77, 33]

arrayNumber.splice(2,0,99);

console.log(arrayNumber);

 

console.log(`Insert elements 100, 200, 400 at index 3 and at the time of insertion don't replace any elements`);

var arrayNumber = [22, 11, 44, 55, 77, 33];

// Insert elements 100, 200, 400 at index 3 ==> [22, 11, 44, 100,200,400,55, 77, 33];

arrayNumber.splice(3, 0, 100, 200, 400);

console.log(arrayNumber);

 

console.log(`Insert an element 500 at index 2 by replacing an element `);

var arrayNumber = [22, 11, 44, 55, 77, 33];

// [22, 11, 500, 55, 77, 33];

arrayNumber.splice(2, 1, 500);

console.log(arrayNumber);

 

console.log(`Insert an element 700 at index 3 by replacing 2 elements`);

var arrayNumber = [22, 11, 44, 55, 77, 33];

// [22, 11, 44, 700, 33]

arrayNumber.splice(3, 2, 700)

console.log(arrayNumber);


console.log(`for in loop`);

var arrayNumber = [22, 11, 44, 55, 77, 33];

for (const index in arrayNumber) {

    const element=arrayNumber[index];

    console.log(`Index: ${index}, value: ${element}`);

}

console.log(`========= Traversing an array using while loop ==============`);

var arrayNumber = [22, 11, 44, 55, 77, 33];

let index=0;

while (index<arrayNumber.length) {

    console.log(arrayNumber[index]);

    index++;

}
// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS

// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS

var arrayNumber = [22, 11, 44, 55, 77, 33];

console.log(`for of loop`);

for (const element of arrayNumber) {

    console.log(element);

}
console.log(`join method`);

const joinedElement = arrayNumber.join(",");

console.log(joinedElement);

 

console.log(`Resizing an array`);

var arrayNumber = [22, 11, 44, 55, 77, 33];// [22, 11, 44]

arrayNumber.length = 3;

console.log(arrayNumber);
