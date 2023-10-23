// var arrayNum = [11, 3, 4, 11, 4, 7, 3];

// const newSet = new Set(arrayNum);

// console.log(newSet);

//output: "HoW ArE YoU MatE"
const str = "How are you mate"
strSplit = str.split(" ")
function firstAndLast(k){
    y = ' '
    for (const iterator of k) {  
        z = iterator
        x = ' '
        for (let index = 0; index < z.length; index++) {
            let element = z[index];
            if (index == 0 || index == z.length - 1) {   
                element = element.toUpperCase();
                
            }
            // else{
            //     c = element.toLowerCase();
            //     lowChar = element.toLowerCase();
            //     y = y + lowChar
            // }    
            x = x + element;   
        }
        y = y + x ;
    }
console.log(`Sentence after first and last letter uppercase: ${y}`);
   }


newString = firstAndLast(strSplit)