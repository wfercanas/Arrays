const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const sumTotal = orders.map((item) => item.total);
const taxes = orders.map((item) => ({
  ...item,
  tax: 0.19,
}));

console.log('original', orders);
console.log('total', sumTotal);
console.log('taxes', taxes);
