
#questions no - 01
let greeting;
greetign = {};
console.log(greetign);

##Ans  :  B: ReferenceError: greetign is not defined.


#questions no - 02
function sum(a, b) {
  return a + b;
}

sum(1, "2");

##Ans  -   A: NaN .


#questions no - 03
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";
console.log(food);

##Ans -  A: ['🍕', '🍫', '🥑', '🍔'].


#questions no - 04
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());

##Ans  -  B: Hi there, undefined.


#questions no - 05
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

##Ans  -  C: 3.

