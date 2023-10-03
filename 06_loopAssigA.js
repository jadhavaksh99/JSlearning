console.log("======================1.==================");
var count = 0
var str = "I am very good IT Developer";
strUC = str.toUpperCase();
for (let index = 0; index < str.length - 1; index++) {
    if (strUC.charAt(index).includes("A") || strUC.charAt(index).includes("E") || strUC.charAt(index).includes("I") || strUC.charAt(index).includes("O") || strUC.charAt(index).includes("U")) {
        count = count + 1;
    }    
}
console.log(count);

console.log("=======================2.=======================");

function cubeNum(){
    var result = 0;
    for (let index = 1; index <= 5; index++) {
        result = result + index * index * index;
        
    }
    console.log(result);
}
cubeNum()
console.log("=======================3.=======================");
var str1 = "Hard work always pays back";
var str2 = "Soon I will be UI IT Champ";
function oddPositionedChars(value){
    var result1 = " "
    for (let index = 1; index <= value.length-1; index = index + 2) {
        result1 = result1 + value.charAt(index);
    }
    console.log(result1);
}
oddPositionedChars(str1.split(" ").join(""))
oddPositionedChars(str2.split(" ").join(""))