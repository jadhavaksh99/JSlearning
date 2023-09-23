console.log("============Assignment 02: file 03_Assign01.js=============");
function firstFunct(){
    console.log('====First Function with no argument and no return type========');
}
firstFunct()
function secondFunct(){
    console.log('====Second Function with no argument and no return type========');
}
secondFunct()
console.log("=============Personal Details =================");
function personalDetails(firstName, lastName, collegeName){
    console.log('My Name is:', firstName, lastName);
    console.log('My college name:', collegeName);
}
personalDetails("Akshay", "Jadhav", "G.H.R.C.E.M,Pune");

console.log("==================Function with args and no return values===============");
function swapValues(valueOne, valueTwo){
    console.log('value before swap ====>', valueOne, valueTwo);
    var num = valueOne;
    valueOne = valueTwo;
    valueTwo = num;
    console.log('value after swap =====>', valueOne, valueTwo);
}

swapValues(5, 10);
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("=============Addition function =====================");
function addThreeValues(val1, val2, val3){
    var result = val1 + val2 + val3;
    return result;
}

var addNum = addThreeValues(10.23, 600, 40)
console.log('Addition of three values 10.23, 600, 40 is', addNum);
var addNum = addThreeValues("Hello, ", "Good ", "Morning")
console.log(addNum);