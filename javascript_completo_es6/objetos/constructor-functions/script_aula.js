// const carro = {
//   marca: 'Marca',
//   preco: 0,
// };

// const honda = carro;
// honda.marca = 'honda';
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = 'fiat';
// fiat.preco = 3000;

// console.log(carro);
// console.log(honda);
// console.log(fiat);

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

// returna undefined
// const honda = Carro();
// console.log(honda);

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);
// fiat.marca = 'Fiat';

console.log(honda);
console.log(fiat);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);
console.log(mazda);

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   },
// };

// Dom.ativar();

// Dom.seletor = 'ul';
// Dom.ativar();

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

const li = new Dom('li');
const ul = new Dom('ul');
console.log(li);
console.log(ul);

li.ativar('ativar');
ul.ativar('ativar');

const lastLi = new Dom('li:last-child');
lastLi.ativar('fafafa');
