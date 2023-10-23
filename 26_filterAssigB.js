const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("=========All numbers > 50=============");

const numbergtFifty = arrayNumbers.filter( (currentValue) => {
    return currentValue > 50
})
console.log(numbergtFifty);
console.log("===============find all even numbers===========");
const evenNumber = arrayNumbers.filter( (currentValue) => {
    return currentValue % 2 == 0
})
console.log(evenNumber);

console.log("=========All odd numbers in array===============");
const oddNumber = arrayNumbers.filter( (currentValue) => {
    return currentValue % 2 != 0
})
console.log(oddNumber);

console.log("numbers which are multiple ofo 5");
const multipleOfFive = arrayNumbers.filter( (currentValue) => {
    return currentValue % 5 == 0
})
console.log(multipleOfFive);

console.log("=====numbers between 20 and 50=====");
const numberTwentytoFifty = arrayNumbers.filter( (currentValue) => {
    return currentValue > 20 && currentValue < 50
})
console.log(numberTwentytoFifty);