const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log("=========Reverse the array===========");
arrayRollNumbers.reverse()
console.log(arrayRollNumbers);

console.log("=====Use sort() method as it is without any custom sorting logic (without passing any arguments) & notice the issue======");
arrayRollNumbers.sort( () => {

})

console.log("======Sort the array in ascending order, by writing your custom logic======");
const ascArray = arrayRollNumbers.sort( (a, b) => {
    return a > b ? 1:-1
    
})
console.log(ascArray);

console.log("===========4. Find the greatest number from array==========");
console.log(ascArray[ascArray.length - 1]);

console.log("===========5. Find smallest number from array ===========");
console.log(ascArray[0]);

console.log("===========6.Remove the duplicates from the array==========");
function removeDuplicates(data){
    return [...new Set(data)]
}
console.log(removeDuplicates(arrayRollNumbers));