const letters = ['a', 'b', 'c'];

// using for
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log(`for: ${element}`);
}

// using forEach
letters.forEach((item) => console.log(`forEach: ${item}`));
