const bankSbi = {
    bankName: "SBI",
    branch: "Pune",
    ifscCode: "SBIN0001",
    revenue: "INR 4733 billion"
}
const bankLocation = {
    street: "MG road",
    city: "Pune",
    pin_code: 411208
}
console.log("=========Clone objects using assign method======");
const bankDetails = Object.assign({}, bankSbi, bankLocation)
console.log("Below are bank details:");
console.log(bankDetails);
console.log("=========clone object using spread operator========");

const spreadBankDetails = {...bankSbi, ...bankLocation}
console.log(spreadBankDetails);

console.log("===================");
const rateOfInterest = {
    homeLoanInterest: 6,
    personalLoanInterest: 12, 
    dueInterest: 9
}
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);
console.log("==============6=====================");
for (const [key, value] of Object.entries(sbiDetails)) {
    console.log(`bank details are as follows - ${key}: ${value}`);
}