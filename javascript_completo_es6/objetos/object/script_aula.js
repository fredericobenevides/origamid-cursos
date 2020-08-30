// const pessoa = new Object({
//   nome: 'André',
// });

// console.log(pessoa);

// const carro = {
//   // marca: 'Marca',
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' ' + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' ' + ' buzinou';
//   },
// };

// // const honda = Object.create(carro);
// // honda.marca = 'Honda';

// const honda = Object.create(carro).init('Honda');

// console.log(carro);
// console.log(honda);
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// Object.assign(moto, funcaoAutomovel);

// console.log(moto);

const moto = {
  capacete: true,
};

// moto.rodas = 5;

Object.defineProperties(moto, {
  rodas: {
    // value: 2,
    // configurable: false,
    // writable: true,
    enumerable: true,

    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

// moto.rodas = 3;
// delete moto.rodas;
console.log(moto);

console.log(Object.getOwnPropertyDescriptors(moto));

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  'innerHeight'
);
console.log(innerHeightConfig);

console.log(Object.keys(moto));
console.log(Object.values(moto));
console.log(Object.entries(moto));

console.log(Object.getOwnPropertyNames(Array));

const frutas = ['Banana', 'Uva'];
console.log(Object.getPrototypeOf(frutas)); // mesma coisa
console.log(Array.prototype); // mesma coisa

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

const novaFruta = frutas1;

console.log(Object.is(frutas1, novaFruta));
console.log(Object.is(frutas1, frutas2));

const carro = {
  marca: 'Ford',
  ano: 2018,
};

console.log(carro);

// Object.freeze(carro);
// carro.marca = 'Honda';
// delete carro.marca;
// console.log(carro);

// Object.seal(carro);
// carro.portas = 4;
// delete carro.marca;
// console.log(carro);

// Object.preventExtensions(carro);
// carro.portas = 4;
// delete carro.marca;

// console.log(carro);
// console.log(Object.isFrozen(carro));
// console.log(Object.isExtensible(carro));
// console.log(Object.isSealed(carro));

console.log(carro.constructor);

console.log(frutas.hasOwnProperty('map')); // false, vem do array o map
console.log(Array.prototype.hasOwnProperty('map')); //true

console.log(Object.getOwnPropertyNames(frutas));

console.log(Array.prototype.isPrototypeOf([])); // true

const frase = 'Oi frase';
const somar = function (a, b) {
  return a + b;
};
const carro2 = {
  marca: 'Ford',
};

console.log(frase.toString());
console.log(somar.toString());
console.log(carro2.toString());

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));
