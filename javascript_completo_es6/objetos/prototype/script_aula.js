function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abracou';
  };
  this.andar = function () {
    return 'Andou pelo objeto';
  };
}

Pessoa.prototype.andar = function () {
  return this.nome + ' Pessoa andou';
};

Pessoa.prototype.nadar = function () {
  return this.nome + ' Pessoa nadou';
};

const andre = new Pessoa('Andre', 28);

// console.log(Pessoa.prototype);
// console.log(Pessoa.prototype.andar());
// console.log(Pessoa.prototype.nadar());
// console.log(andre.prototype); // undefined, prototype tá ligado a uma função
// console.log(andre.andar());
// console.log(andre.nadar());

const pais = 'Brasil';
const cidade = new String('Rio');
console.log(pais);
console.log(cidade);

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];
console.log(listaAnimais);

const lista = document.querySelectorAll('li');
console.log(lista);

// Transforma em um array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);
console.log(listaArray1);
console.log(listaArray2);

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

console.log(Object.getOwnPropertyNames(andre));
console.log(Object.getOwnPropertyNames(Pessoa.prototype));

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  },
};

console.log(typeof Carro);
console.log(Carro.andar.constructor.name);
console.log(Carro.andar().constructor.name);
console.log(Carro.preco.constructor.name);
console.log(Carro.preco.constructor.name.constructor.name);
