function squareOfWordLength(str1, str2, str3){
    var lenStr1 = str1.length;
    var lenStr2 = str2.length;
    var lenStr3 = str3.length;
    console.log("=======================step1=======================");
    console.log(`Square of length of ${str1} word is ${lenStr1*lenStr1}`);
    console.log(`Square of length of ${str2} word is ${lenStr1*lenStr1}`);
    console.log(`Square of length of ${str3} word is ${lenStr1*lenStr1}`);
}

squareOfWordLength("JavaScript", "Google Chrome", "Developer Smart")

function stringLength(myString) {
    console.log("====================step 2 ==========================");
    var stringLength = myString.length;
    var splitString = myString.split(" ");
    var lenSplitString = splitString.length;
    result1 = stringLength / lenSplitString;
    result2 = stringLength * lenSplitString;
    console.log(`2.1 String length divide by total number of words = ${result1}`);
    console.log(`2.2 String length multiple by total words = ${result2}`);

}

stringLength("I am Angular Developer")