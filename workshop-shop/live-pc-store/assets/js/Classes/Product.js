/**
 * Product Class
 * @license MIT
 * @author Fabio Pacifici
 * @copyright - 2022 Fabio Pacifci
 */
export default class Product {
  /**
   * 
   * @param {string} image The product image path
   * @param {string} name The product name
   * @param {string} content The product short description
   * @param {number} price The product price
   */
  constructor(image, name, content, price, discount) {
    this.image = image
    this.name = name
    this.content = content
    this.price = price
    this.discount = discount
  }


}


//export {Product as default} // Default export solo uno per file 
