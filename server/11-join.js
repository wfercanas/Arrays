const elements = ['Fire', 'Air', 'Water'];

// Concatenate elements from an array in a single string using for
const separator = '--';
let forString = '';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  forString += element + separator;
}

// Concatenate elements using join()
let joinString = elements.join('--');

console.log('for:', forString);
console.log('join:', joinString);
