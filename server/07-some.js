const numbers = [1, 2, 3, 4];

// using a for for checking the condition
let forCondition = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    forCondition = true;
    break;
  }
}

// using some for checking the same condition
let someCondition = numbers.some((item) => item % 2 === 0);

console.log('for:', forCondition);
console.log('some:', someCondition);
