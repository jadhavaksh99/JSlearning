console.log("=======================step1 Function Expression =================");
var square= function(number){
    result = number*number;
    console.log(`Square of ${number} is ${result}`);
}

square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
functionDataType = typeof square();
console.log(`step2 . Type of function is ${functionDataType}`);

console.log("=======================step3 Rectangle Area =================");
var rectangleArea = function(length, width){
    var result = length * width;
    console.log(`Area of rectangle with length ${length} and width ${width} is ${result}`);
}

rectangleArea(499, 917)
console.log("=======================step4 Swap values =================");
var swapValue = function(value1, value2){
    console.log(`Before swap value1 is ${value1} and value2 is ${value2}`);
    result = value1;
    value1 = value2;
    value2 = value1;
    console.log(`After swap value1 is ${value1} and value2 is ${value2}`);

}

swapValue("Mahi", "Raina");
swapValue(55, 77);

console.log("=======================step5  String operations =================");
var stringFunction = function(str){
    var strLen = str.length;
    console.log(`Total character available in string is ${strLen}`);
    var charIndex6 = str.charAt(6);
    console.log(`Character at index 6 is '${charIndex6}' `);
    var charIndex11 = str.charAt(11);
    console.log(`Character at index 11 is '${charIndex11}' `);
    var lastChar = str.charAt(str.length - 1);
    console.log(`Last character is ${lastChar}`);
    var firstChar = str.charAt(0);
    console.log(`First character is ${firstChar}`);
    var thirdLastChar = str.charAt(str.length - 3);
    console.log(`Third last character is ${thirdLastChar}`);
    var strTrim = str.split(" ");
    var strTrimLength = strTrim.length;
    var squareStrTrimLength = strTrimLength * strTrimLength
    console.log(`Total number of words in the given sstring is ${strTrimLength} and square of length of given string is ${squareStrTrimLength}`);
}

stringFunction("JS the most popular language of internet");