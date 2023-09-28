console.log("======================step1============================");
function maleMarrigeEligibility(gender, age, boyName){
    console.log( gender == "male" && age > 21 ? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are not eligible for Marriage`);


}
maleMarrigeEligibility("male", 25, "Bill Gates");
maleMarrigeEligibility("male", 17, "Stew Jobs");

console.log("======================step2============================");
function femaleMarrigeEligibility(gender, age, girlName){
    console.log( gender == "female" && age >= 18 ? `Hey ${girlName} you are eligible for Marriage` : `Hey ${girlName} you are not eligible for Marriage`);


}
femaleMarrigeEligibility("female", 16, "Jennifer");
femaleMarrigeEligibility("female", 27, "Malinda Gates");