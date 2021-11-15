// Sort months. They are ordered by ASCII.
const months = ['Mar', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

// Sort numbers. They are also ordered by ASCII, not by number, if no callback is provided.
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);

// Sort words. Ordered by ASCII
const words = ['reserve', 'premier', 'communique', 'cafe', 'adieu', 'eclaire'];
words.sort();
console.log(words);

// Sort objects by total value.
const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2021, 8, 19),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 8, 22),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2021, 8, 1),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2021, 8, 7),
  },
];
orders.sort((a, b) => a.date - b.date);
console.log(orders);
