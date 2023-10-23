const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("=============================1.==========================");
console.log(`Total elements available in an array is ${arrayNumbers.length}`);

console.log("=============================2.==========================");
console.log(`First Element in array is ${arrayNumbers[0]}`);
console.log(`Last Element in array is ${arrayNumbers[arrayNumbers.length - 1]}`);

console.log("=============================3.==========================");
console.log(`Third last Element in array is ${arrayNumbers[arrayNumbers.length - 3]}`);

console.log("=============================4.==========================");
var arrayEven = "";
var arrayOdd = "";
for (const index in arrayNumbers) {
    if (arrayNumbers[index] % 2 == 0) {
        arrayEven = arrayEven + arrayNumbers[index] + " ";
        
    }
    else{
        arrayOdd = arrayOdd+ arrayNumbers[index] + " ";
    }
    
}
console.log(`All Even numbers using for loop in array are ${arrayEven}`);

console.log("=============================5.==========================");
console.log(`All Even numbers using for loop in array are ${arrayOdd}`);

console.log("=============================6.==========================");
var positionedElement = 0;
var oddPositionedElement = 0;
for (const index in arrayNumbers) {
    if (arrayNumbers[index] % 2 == 0) {
        positionedElement = positionedElement + arrayNumbers[index]        
    }
    else {
        oddPositionedElement = oddPositionedElement + arrayNumbers[index]
    }
}
console.log(`Sum of all even positioned number in array is: ${positionedElement}`);
console.log("=============================7.==========================");
console.log(`Sum of all odd positioned number in array is: ${oddPositionedElement}`);

console.log("=============================8.==========================");
var sumOfNumbers = 0
for (const index in arrayNumbers) {
    sumOfNumbers = sumOfNumbers + arrayNumbers[index]
}
console.log(`Total sum of all element in array is: ${sumOfNumbers}`);
console.log("=============================9.==========================");
var multipeOfFive = ""
for (const index in arrayNumbers) {
    if (arrayNumbers[index] % 5 == 0) {
        multipeOfFive = multipeOfFive + arrayNumbers[index] + " " 
    }
}
console.log(`Numbers in array which are multiple of 5 are: ${multipeOfFive}`);
console.log("=============================10.==========================");

console.log(`Does #115 include in array? = > ${arrayNumbers.includes(115)}`);

console.log("=============================11.==========================");

console.log(`Does #23 include in array? = > ${arrayNumbers.includes(23)}`);

console.log("=============================12.==========================");

const insertElement = arrayNumbers.splice(2, 0, 55, 66)
console.log(arrayNumbers);

console.log("=============================13.==========================");

const deleteElement = arrayNumbers.splice(4, 3);
console.log(arrayNumbers);