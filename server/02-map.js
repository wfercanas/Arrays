const letters = ['a', 'b', 'c'];

// Transform an array using for
const forArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  forArray.push(element + '++');
}

// Transform an array using map()
const mapArray = letters.map((item) => item + '++');

console.log('for - original', letters);
console.log('for - new', forArray);
console.log('map - new', mapArray);
