var n1 = "20";
var n2 = 20;
console.log(n1===n2);


console.log(n1, typeof n1);

var result;
result = '3' + 2;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '3' + true;
console.log(result);

result = '3' + null;
console.log(result);

console.log('4' - true);
console.log(`Ans: '4' implicit converted to 4 (number) and true (Boolean) `);

result = '3' + '4';
console.log(result);
console.log(typeof(result));

result = '3' - '2';
console.log(result);

result = '3' * '2';
console.log(result);

result = '4' / '2';
console.log(result);