const values = [];

for (let i = 0; i <= 100; i++) {
  values.push(Math.floor(Math.random() * 10 + 1));
}

const initialState = {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
};

const frequency = values.reduce((acc, curr) => {
  if (curr < 6) {
    acc['1-5'] = acc['1-5'] + 1;
  } else if (curr < 9) {
    acc['6-8'] = acc['6-8'] + 1;
  } else {
    acc['9-10'] = acc['9-10'] + 1;
  }

  return acc;
}, initialState);

console.log(values);
console.log(frequency);
