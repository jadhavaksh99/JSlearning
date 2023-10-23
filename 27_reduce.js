const array =  [2, 5, 3, 2, 7, 11];
const sum = array.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(sum);
const array1 = [3, 5, 2, 6, 10, 45, 33];
const multiply = array.reduce( (runningTotal, value)=>{
    return runningTotal * value
})
console.log(multiply);
const nestedArray =  [ [2, 5], [4, 5, 6],[ 2, 7, 11] ];
const arrayNum = nestedArray.flatMap( (element => element));

console.log(arrayNum);