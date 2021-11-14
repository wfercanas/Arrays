const items = [1, 3, 2, 3, 3, 1, 10];

const frequency = items.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr] = acc[curr] + 1;
  }
  return acc;
}, {});

console.log(frequency);
