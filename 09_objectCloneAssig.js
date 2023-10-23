const bankSbi = {
    bankName: "SBI",
    branch: "Pune",
    ifscCode: "SBIN0001",
    revenue: "INR 4733 billion"
}

let bankLocation = {
    street: "M.G.Road",
    city: "Pune",
    pin: "411112"   
}

const cloneObjectBankSbi = Object.assign({}, bankSbi);

console.log(`Bank Name is ${cloneObjectBankSbi.bankName}, branch is ${cloneObjectBankSbi.branch}, Ifsc code is ${cloneObjectBankSbi.ifscCode} and revenue of bank is ${cloneObjectBankSbi.revenue}.`);


const cloneObjectBankLocation = Object.assign({}, bankLocation)
console.log(`Bank address is street#${cloneObjectBankLocation.street}, inn city ${cloneObjectBankLocation.city}and pin# is  ${cloneObjectBankLocation.pin}.`);

const rateOfInterest = {
    homeLoanInterest: 6,
    personalLoanInterest: 12, 
    dueInterest: 9
}

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(`These are sbi bank details: bank name is ${sbiDetails.bankName}, branch is ${sbiDetails.branch}, bank IFSC code is ${sbiDetails.ifscCode}, bank revenue is ${sbiDetails.revenue}.Bank location is street name ${sbiDetails.street} in city ${sbiDetails.city}, pin code is ${sbiDetails.pin}.We offer interest rate as home loan Interest${sbiDetails.homeLoanInterest}% , personal loan Interest as ${sbiDetails.personalLoanInterest}%,due Interest is ${sbiDetails.dueInterest}`);

for (const element in sbiDetails) {
    console.log(element);
}