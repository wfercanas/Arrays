const numbers = [1, 30, 49, 29, 10, 13];

// Get the index of element that matches a condition with for
let forIndex = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    forIndex = index;
    break;
  }
}

// Get the index of the same element using findIndex()
const findIndex = numbers.findIndex((item) => item === 30);

console.log('for:', forIndex);
console.log('findIndex:', findIndex);
