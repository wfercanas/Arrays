const pets = ['cat', 'dog', 'bat'];

let forValue = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    forValue = true;
    break;
  }
}

const includesValue = pets.includes('dog');

console.log('for:', forValue);
console.log('includes:', includesValue);
