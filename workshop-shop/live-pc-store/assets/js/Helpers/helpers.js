function generateCardMarkup(image, name, content, price) {
  const productCardMarkup =
    `
  <div class="col">
  <div class="card text-left">

    <img class="card-img-top" src="${image}" alt="${name}">
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${content}</p>
      <p class="card-text">${price}</p>

    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary" data-product-name="${name}" data-product-price="${price}">Buy now</a>
    </div>
  </div>
</div>
`
  return productCardMarkup
}


function generateProducts(db, rowElement) {
  db.forEach(product => {
    // per ciascuna iterazione seleziono il singolo prodotto e lo loggo in console
    console.log(product); // Product Object 
    const {
      image,
      name,
      price,
      content
    } = product
    console.log(image, name, price);
    // genero il markup per la card del prodotto
    const productCardMarkup = generateCardMarkup(image, name, content, price)
    // inserisco nella riga della griglia html la card generata
    rowElement.insertAdjacentHTML('beforeend', productCardMarkup)
  })
}


export {
  generateProducts
}