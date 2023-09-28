

function stringHandsOn(){
    var str = "   Hey, You are doing good. Keep it up    ";
    console.log(`1.Given string is: ${str} `);
    console.log(`2.Given string length is `, str.length);
    var trimStr = str.trim();
    var lenTrimStr = trimStr.length;
    console.log(`3.Updated string after trim is: ${trimStr} [Length of string is ${lenTrimStr}]`);
    console.log(`4.Total extra spaces are`, str.length - trimStr.length);
    var firstChar = trimStr.slice(0, 1);
    var lastChar = trimStr.slice(-1);
    console.log(`5.First character is ${firstChar} and last character is ===> ${lastChar}`);
    var splitWord = trimStr.split(" ");
    var lenTrimWord = splitWord.length
    console.log(`6.Total words in updated string is ${lenTrimWord}`);
    var goodIndex = trimStr.indexOf("good");
    console.log(`7.Index of word good is ${goodIndex}`);
    var sliceString = trimStr.slice(22)
    console.log(`8. Substring starting from 22 is ${sliceString}`);
    var upString = trimStr.includes("up")
    console.log("9. Is string ends with word 'up' : ", upString);
    var heyString = trimStr.includes("Hey")
    console.log("9. Is string starts with word 'Hey' : ", heyString);
 


}

stringHandsOn()