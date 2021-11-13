const letters = ['a', 'b', 'c'];

// Recorrido usando For
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log(`for: ${element}`);
}

// Recorrido usando ForEach
letters.forEach((item) => console.log(`forEach: ${item}`));
