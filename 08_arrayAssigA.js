console.log("=================1.======================");
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const firstElement = arrayFruits[0];
console.log(`First Element of arrayFruits is ${firstElement}`);
const lastElement = arrayFruits[arrayFruits.length - 1];
console.log(`Last Element of arrayFruits is ${lastElement}`);
console.log("=================2.======================");
const addPapaya = arrayFruits.unshift("Papaya");
console.log(`After adding Papaya fruit at first place Original array now becomes ${arrayFruits}`);
console.log("=================3.======================");
const removeMango = arrayFruits.splice(4, 1);
console.log(removeMango);
console.log(arrayFruits);
console.log("=================4.======================");
const addLastElement = arrayFruits.push("Pineapple");
console.log(arrayFruits);

console.log("=================5.======================");
const insertElement = arrayFruits.splice(3, 0, "Dragon Fruit");
console.log(arrayFruits);

console.log("=================6.======================");
const replaceElement = arrayFruits.splice(2, 1, "Kiwi");
console.log(arrayFruits);

console.log("=================7.======================");
const slicedElement = arrayFruits.slice(1, 5);
console.log(slicedElement);

console.log("=================8.======================");
const lastThreeElement = arrayFruits.slice(arrayFruits.length - 3)

console.log(lastThreeElement);