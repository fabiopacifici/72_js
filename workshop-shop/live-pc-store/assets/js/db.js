// Importo la classe Product per poterla istanziare
import Product from './Classes/Product.js';
// Creo array di istanze della classe product
const products = [
  new Product('https://picsum.photos/400/200', 'Lenovo Laptop 1', 'lorem ipsum', 599.99),
  new Product('https://picsum.photos/400/200', 'Lenovo Laptop 2', 'lorem ipsum', 599.99),
  new Product('https://picsum.photos/400/200', 'Lenovo Laptop 3', 'lorem ipsum', 599.99),
  new Product('https://picsum.photos/400/200', 'Lenovo Laptop 4', 'lorem ipsum', 599.99),
  new Product('https://picsum.photos/400/200', 'Lenovo Laptop 5', 'lorem ipsum', 599.99),
  new Product('https://picsum.photos/400/200', 'Lenovo Laptop 6', 'lorem ipsum', 599.99),

]
// Named export con alias di products come db
export {
  products as db
}