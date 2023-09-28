console.log("======================step1==============================");
function greaterNumber(num1, num2){
    var result1 = num1 > num2 ? num1 :num2; 
    
    console.log(`Greater number amongst ${num1} and ${num2} is ${result1}`); 
}

greaterNumber(10, -10);
greaterNumber(800, 899);
console.log("======================step2==============================");
function isEvenOrOddNum(number){
    var result = (number % 2 == 0 ? "even" : "odd");
    console.log(`The given number ${number} is ${result}`);
}

isEvenOrOddNum(11);
console.log("======================step3==============================");
function wordLength(word1, word2, word3){
    var lenWord1 = word1.length;
    var lenWord2 = word2.length;
    var lenWord3 = word3.length;
    var resultWord1 = (lenWord1 % 2 == 0 ? "even" : "odd");
    var resultWord2 = (lenWord2 % 2 == 0 ? "even" : "odd");
    var resultWord3 = (lenWord3 % 2 == 0 ? "even" : "odd");
    console.log(`The given word ${word1} having length ${lenWord1} is ${resultWord1}`);
    console.log(`The given word ${word2} having length ${lenWord2} is ${resultWord2}`);
    console.log(`The given word ${word3} having length ${lenWord3} is ${resultWord3}`);
}
wordLength("Javascript", "Developer", "Google");