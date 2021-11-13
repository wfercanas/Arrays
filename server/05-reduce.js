const totals = [1, 2, 3, 4];

// Sum the values in the array using for
let forSum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  forSum = forSum + element;
}

// Sum the values in the array using reduce()
const reduceSum = totals.reduce((acc, curr) => acc + curr, 0);

console.log(forSum);
console.log(reduceSum);
