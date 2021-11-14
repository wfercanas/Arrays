const easyMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const hardMatrix = [
  [1, 2, [3, 3]],
  [4, [5, 5, [4, 2]], 6],
  [[1, [2, 3, 4, [3, [2, 1]]]], 8, 9],
];

// Get a flat array with all the elements of easyMatrix using for
const forArray = [];
for (let i = 0; i < easyMatrix.length; i++) {
  const array = easyMatrix[i];
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    forArray.push(element);
  }
}

// Get a flat array without using for nor flat() for the hardMatrix -> Recurssion
const recursiveArray = [];
const flatFunction = (array, index) => {
  if (index === array.length) {
    return;
  }
  if (typeof array[index] === 'object') {
    flatFunction(array[index], 0);
  } else {
    recursiveArray.push(array[index]);
  }
  flatFunction(array, index + 1);
};

// Get a flat array using flat(value) where value is the highest nested level
const flatArray = hardMatrix.flat(5);

console.log('for:', forArray);
flatFunction(hardMatrix, 0);
console.log('recursive:', recursiveArray);
console.log('flat:', flatArray);
