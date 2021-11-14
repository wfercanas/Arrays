const numbers = [1, 30, 49, 10, 13];

// Check a condition that all elements must comply using for
let forCondition = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 40) {
    forCondition = false;
    break;
  }
}

// Checking the same condition with every
let everyCondition = numbers.every(item => item <= 40);

console.log('for:', forCondition);
console.log('every:', everyCondition);