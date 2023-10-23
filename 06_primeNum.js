const num = 1
function isPrimeNumber(num){
    for (let index = 2; index <= num; index++) {
        if (num % index == 0) {
            return false
        }
        
    }
    return true

}

const result = isPrimeNumber(11)
console.log(`Given number 11 prime number is ${result}`);
