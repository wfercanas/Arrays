const numbers = [1, 30, 49, 29, 10, 13];

// find a value in an array using for
let forValue = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    forValue = element;
    break;
  }
}

// find a value using the find() method
let findValue = numbers.find((item) => item === 30);

console.log('for:', forValue);
console.log('find:', findValue);
