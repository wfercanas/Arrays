const words = ['spray', 'limit', 'elite', 'exuberant'];

// Filter an array using a for
const forArray = [];
for (let index = 0; index < words.length; index++) {
  const word = words[index];
  if (word.length >= 6) {
    forArray.push(word);
  }
}

// Filter an array using filter()
const filterArray = words.filter((word) => word.length >= 6);

console.log('original', words);
console.log('for', forArray);
console.log('filter', filterArray);
