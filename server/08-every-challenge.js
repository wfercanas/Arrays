// Here we must check that all team members are less than 15 years old

const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

const validation = team.every((item) => item.age <= 15);
console.log('Valid?:', validation);
