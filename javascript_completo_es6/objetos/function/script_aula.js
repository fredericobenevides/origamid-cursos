// const perimetro = new Function('lado', 'return lado * 4');

// console.log(perimetro(5));

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(3, 3));
// console.log(somar.length);
// console.log(somar.name);

// function darOi(nome, idade) {
//   console.log('Oi para você ' + nome + ' ' + idade);
// }

// darOi();
// darOi.call({}, 'André');

window.marca = 'Carro';
window.ano = '288';

function descricaoCarro(velocidade) {
  console.log(this);
  console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
}

descricaoCarro();
descricaoCarro.call({ marca: 'Honda', ano: 2015 }, 100);

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  // this.element.classList.add(classe);
};

// const ul = new Dom('ul');

const li = {
  element: document.querySelector('li'),
};

Dom.prototype.ativo.call(li, 'ativar');
// ul.ativo.call(li, 'ativo');
// ul.ativo('ativar');

const frutas2 = ['Uva', 'Maçã', 'Banana'];

Array.prototype.mostrarThis = function () {
  console.log(this);
};

console.log(frutas2.mostrarThis());

Array.prototype.pop.call(frutas2); // mesma coisa
frutas.pop(); // mesma coisa

console.log(frutas2);

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
};

const li2 = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li2, (item) => {
  console.log(item);
  // return true;
  return item.classList.contains('ativo');
});

console.log(filtro);

const filtro2 = Array.prototype.filter.bind(li2, (item) => {
  return item.classList.contains('ativo');
}); // bind nao ativa, apenas retorna o this alterado

console.log(filtro2);
console.log(filtro2());

const numeros = [33, 232, 33, 434, 54, 5424, 4];

// console.log(Max.max(numeros)) // não funciona, pois nao aceita array

console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document);
console.log($);
console.log($('ul'));

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

console.log(carro);
console.log(carro.acelerar(100, 20));

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(300, 20));
