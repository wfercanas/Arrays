const products = [
  {
    title: 'Pizza',
    price: 121,
    id: '🍕',
  },
  {
    title: 'Burger',
    price: 121,
    id: '🍔',
  },
  {
    title: 'Hot cakes',
    price: 121,
    id: '🥞',
  },
];

const productsV2 = [...products];
const myProducts = [];

console.log('products:', products);
console.log('myProducts:', myProducts);
console.log('-'.repeat(10));

// Search a product, add to myProducts and delete from products
const productIndex = products.findIndex((item) => item.id === '🍔');
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

console.log('products:', products);
console.log('myProducts:', myProducts);
console.log('-'.repeat(10));

// Update a product

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'delicious',
  },
};

const updateIndex = productsV2.findIndex((item) => item.id === update.id);
productsV2[updateIndex] = { ...productsV2[updateIndex], ...update.changes };

console.log(productsV2);
