const cars = [{
    model: 'model X',
    brand: 'Tesla',
    engine: 'Electric'
  },
  {
    model: 'model Y',
    brand: 'Tesla',
    engine: 'Electric'
  },
  {
    model: '500L',
    brand: 'Fiat',
    engine: 'Disel'
  },
  {
    model: 'Panda',
    brand: 'Fiat',
    engine: 'Benzina'
  },
  {
    model: 'Punto',
    brand: 'Fiat',
    engine: 'Metano'
  },
  {
    model: 'model XX',
    brand: 'Tesla',
    engine: 'Electric'
  }, {
    model: 'model YY',
    brand: 'Tesla',
    engine: 'Electric'
  }, {
    model: '500',
    brand: 'Fiat',
    engine: 'Electric'
  }, {
    model: 'Punto D',
    brand: 'Fiat',
    engine: 'Disel'
  }, {
    model: 'Cyber Truck',
    brand: 'Tesla',
    engine: 'Electric'
  }
]


/* const petrol = cars.filter(car => {
  // blocco di codice che deve restituire true/false
  if (car.engine === 'Benzina') {
    return true
  }
}) */

const petrol = cars.filter(car => car.engine === 'Benzina')

console.log(petrol);

const disel = cars.filter(car => car.engine === 'Disel')
console.log(disel);


const others = cars.filter(car => car.engine !== 'Benzina' && car.engine !== 'Disel')
console.log(others);
/* 
const otherCars = cars.filter(car => {
  if (car.engine !== 'Benzina' && car.engine !== 'Disel') {
    return true
  }
}) 

console.log(otherCars);*/