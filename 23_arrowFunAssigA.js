console.log("==================Arrow function with no args , no return value ================");
let display = () => {
    console.log("Good Morning, Today is Wednsaday");
}
display()

console.log("===============Arrow function with 3 args and no return values =============");
let multiplication = (value1, value2, value3 = 1) => {
    result = value1 * value2 * value3;
    console.log(`Multiplication of numbers by using arrow function: number1, number 2, number3, ${value1}, ${value2}, ${value3} is ${result}`);
}

multiplication(5, 5, 2)
multiplication(10, 4)

console.log("==Arrow function with 5 arg and return value such as , for received params it should be addition===");
let addition = (value1, value2, value3, value4, value5) => {
    total = value1 + value2 + value3 + value4 + value5
    return total
}
result = addition(100, 100, 200, 349, 756)
console.log(`Addition is ${result}`);
concatedString = addition("I am", " learning", " ES6", " features", " in depth")
console.log(concatedString);