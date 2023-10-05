
function countCharA(value){
    count = 0
    for (let index = 0; index < value.length; index++) {
        if (value.charAt(index).includes("a") || value.charAt(index).includes("A")) {
            count = count + 1;
        }       
    }
    console.log(`Total number of "a" or "A" available in '${value}' string is ${count}`);
    
}

countCharA("I AM Learning Javascript.The Language of internet");
countCharA("My favourite movie is LAggAn");