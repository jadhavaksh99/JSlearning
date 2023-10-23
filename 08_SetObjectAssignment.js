class Bank {
    //constructor
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName,
        this.location = location,
        this.accountNo = accountNo,
        this.ifsc = ifsc,
        this.interestRate = interestRate
    }
}

const axisBank = new Bank('axis', 'pune', 3234546, 'axis98086');
const sbiBank = new Bank('SBI', 'Mumbai', 549581324168, 'sbin51231');
const iciciBank = new Bank('ICICI', 'Kolkata', 4654621, 'ICIC008756');
const kotakBank = new Bank('kotak', 'cochi', 65984131, 'kotak00324544');
const hdfcBank = new Bank('HDFC', 'Jaypur', 49841322, 'HDFC0090544');
const punjabBank = new Bank('PNB', 'Chandigarh', 84654813, 'PNB007786875');


const bank_set = new Set();
bank_set.add(axisBank);
bank_set.add(sbiBank);
bank_set.add(iciciBank);
bank_set.add(kotakBank);
bank_set.add(hdfcBank);
bank_set.add(punjabBank);
console.log(bank_set);
for (const element of bank_set) {
    console.log(element.bankName, element.location);
}