// Object property shorthand

const name = 'John';
const userAge = 25;

const user = {
    name,
    age: userAge,
    location: 'New York'
}

console.log(user);

// Object destructuring

const product = {
    label: 'Laptops',
    price: 1000,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label;
// const stock = product.stock;

// const {label: productLabel, stock, rating = 5} = product;
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
   console.log(type, label, stock)
}

transaction('order', product)