// Cria um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'André',
  sobrenome: 'Rafael',
  idade: 28,
  cidade: 'Rio de Janeiro',
};

console.log(dadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preço para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10',
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return '';
    }
  },
};

console.log(cachorro);
console.log(cachorro.latir('homem'));
console.log(cachorro.latir('mulher'));
