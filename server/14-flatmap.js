const users = [
  {
    userId: 1,
    username: 'Tom',
    attributes: ['Nice', 'Cute'],
  },
  {
    userId: 2,
    username: 'Mike',
    attributes: ['Lovely'],
  },
  {
    userId: 3,
    username: 'Nico',
    attributes: ['Nice', 'Cool'],
  },
];

// Get a flat array with all the attributes in users without flatmap()
const attributes = users.map((user) => user.attributes).flat();

// Get the same flat array with flatmap()
const flatmapAttributes = users.flatMap((user) => user.attributes);

console.log('attributes:', attributes);
console.log('flatmap:', flatmapAttributes);
