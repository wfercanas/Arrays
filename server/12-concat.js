const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const forArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  forArray.push(element);
}

const concatArray = elements.concat(otherElements);

console.log('for:', forArray);
console.log('concat:', concatArray);
