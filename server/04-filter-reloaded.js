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

// Filter all delivered orders and with a total greater than 100
const delivered = orders.filter((item) => item.delivered && item.total >= 100);
console.log(delivered);

// Filter all orders that are delivered for a user whose name is passed through a 'query'
const searchByName = (query) => {
  return orders.filter((item) => {
    return item.customerName.toLowerCase().includes(query.toLowerCase());
  });
};
console.log(searchByName('Nico'));
