function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName,
    this.location = location,
    this.ifscCode = ifscCode,
    this.branchCode = branchCode
}

const yesBank = new Bank('Yes', 'Pune', '1234', 'dsdf43')
const sbiBank = new Bank('SBI', 'Mumbai', '56781234', '5152d')
const mahBank = new Bank('BOM', 'Solapur', '87546', 'ds521651')
const axisBank = new Bank('Axis', 'Banglore', '98378', '5468ff43')


console.log(`Bank Details is: ${yesBank.bankName},${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode} `);
console.log(`Bank Details is: ${sbiBank.bankName},${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode} `);
console.log(`Bank Details is: ${mahBank.bankName},${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode} `);
console.log(`Bank Details is: ${axisBank.bankName},${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode} `);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closingTime = "6 PM IST";
console.log("========5.======================");
console.log(`SBI bank opens at ${sbiBank.openTime} and closes at ${sbiBank.closingTime}`);
console.log("======================6.==========================");
console.log(`${axisBank.bankName} bank closes at ${axisBank.closingTime}`);
console.log("=========================7.===========================");
console.log(`${yesBank.bankName} bank whose branch code is ${yesBank.branchCode} closes at ${yesBank.closingTime}`);
