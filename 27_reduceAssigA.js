const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]

console.log("find sum of all number using reduce()and traditional way"); 
//find number , multiple of 5 and then sum

let sumOfAll = array_numbers.reduce( (runningTotal, value) => {
    runningTotal = runningTotal + value
    return runningTotal
})
console.log(`sum of all array elements using reduce method`, sumOfAll);
let num = 0
array_numbers.forEach(element => {
    num = num + element
});
console.log(`Sum of all elements by traditional ways`, num);
var num1 = 0
console.log("====Find the numbers of multiple of 5 and then sum it [Hint- filter first then use reduce()====");
const multipleOfFive = array_numbers.filter( (currentValue) => {
    return currentValue % 5 == 0
}).reduce( (runningTotal, value) => {
    runningTotal = runningTotal + value
    return runningTotal
})

console.log(multipleOfFive);


