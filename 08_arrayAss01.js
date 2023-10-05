let arrayNumbers = [22, 11, 44, 55, 77, 33];
count = 0
console.log("=============1. Even positioned value in Array are=========");
for (let index = 0; index < arrayNumbers.length - 1; index = index + 2) {
    //console.log(arrayNumbers[index]);
    const element = arrayNumbers[index];  
    count = element + count   
    console.log(element);
}
console.log("==============================2.=======================");
console.log(`Sum of array elements at even position is ${count}`);
