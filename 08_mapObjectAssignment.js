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

const axisBank = new Bank('axis', 'pune', 3234546, 'axis98086', '6%');
const sbiBank = new Bank('SBI', 'Mumbai', 549581324168, 'sbin51231', '7%');
const iciciBank = new Bank('ICICI', 'Kolkata', 4654621, 'ICIC008756', '8%');
const kotakBank = new Bank('kotak', 'cochi', 65984131, 'kotak00324544', '7.5%');
const hdfcBank = new Bank('HDFC', 'Jaypur', 49841322, 'HDFC0090544', '6.5%');
const punjabBank = new Bank('PNB', 'Chandigarh', 84654813, 'PNB007786875', '3.5%');

const map = new Map();

map.set(axisBank.accountNo, axisBank)
map.set(sbiBank.accountNo, sbiBank)
map.set(iciciBank.accountNo, iciciBank)
map.set(kotakBank.accountNo, kotakBank)
map.set(hdfcBank.accountNo, hdfcBank)
map.set(punjabBank.accountNo, punjabBank)

console.log(map);
const all_keys = map.keys()
console.log(all_keys);
console.log("========Traverse map=========");
for (const element of all_keys) {
    console.log(map.get(element).bankName, map.get(element).accountNo, map.get(element).interestRate);
}