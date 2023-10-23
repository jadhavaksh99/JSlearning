const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);
console.log(setOfRollNum);
console.log(`Total element in set is: ${setOfRollNum.size}`);
// setOfRollNum.clear();
setOfRollNum.delete(22)
console.log(setOfRollNum);
let result =setOfRollNum.has(33);
console.log(result);

console.log(typeof setOfRollNum);


for (const element of setOfRollNum) {
    console.log(element);
}
console.log("===========array to set===");
var arrayNumber = [22, 11, 44, 22, 77, 11];
const setNum = new Set(arrayNumber);
console.log(setNum);

arrayNumber = [...new Set(arrayNumber)];
console.log(arrayNumber);

const map = new Map();
map.set(11, 'Jenny');
map.set(22, 'Bill');
map.set(33, 'Elon');
map.set(44, 'Stew');
console.log(map);

const key33Value = map.get(33);
console.log(key33Value);

map.set(22, 'ABC');
console.log(map);

map.set(55, 'Jenny');
console.log(map);

console.log(`Total elements in map is: ${map.size}`);

map.delete(33);
console.log(map);

console.log(map.has(22));

const keys = map.keys();
console.log(keys);
const values =map.values();
console.log(values);
console.log(`Traversing map`);

const totalKeys = map.keys();
for (const key of totalKeys) {
    console.log(key, map.get(key));
}
