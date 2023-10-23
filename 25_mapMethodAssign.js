const arrayNumbers = [20, 11, 40, 23, 119, 31, 60, 2, 19];
console.log("=========Add 10 into each element and log ============");

const arrayTransform = arrayNumbers.map( (currentValue) => {
    return currentValue + 10;
})
console.log(arrayTransform);

console.log("===============Cube each array element and log=============");
const cubeElement = arrayNumbers.map( (currentValue) => {
    return currentValue * currentValue * currentValue
})

console.log(cubeElement);

console.log("=====================Add the index value to its corresponding each array element and log =====");

const newArray = arrayNumbers.map( (currentValue, index) => {
    return currentValue + index
})

console.log(newArray);