const str = "How are you mate"; // "HoW ArE YoU MatE"
const arrayWord = str.split(' ');
let finalStr = '';
for (const word of arrayWord) {
    let firstChar = word.charAt(0).toUpperCase();
    let lastChar = word.charAt(word.length-1).toUpperCase();
    // Replace word,  first char by firstChar
    // Replace word,  last char by lastChar
    finalStr = finalStr + word;
    console.log(word, firstChar, lastChar );
}
console.log(finalStr);