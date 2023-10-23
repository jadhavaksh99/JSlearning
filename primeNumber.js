const array = [11, 3, 6, 10, 43, 29, 50];

for (let index = 2; index < array.length - 1; index++) {
    const element = array[index];
    for (const key in object) {
        if (element % index == 0) {
            console.log(`${element} is a prime number`);
        }
        else{
            console.log(`${element} not a prime number`);
        }
}
    }
       
console.log();

