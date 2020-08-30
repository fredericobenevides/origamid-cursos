// Remova o erro
// priceNumber('R$ 99.99');
const priceNumber = (n) => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99.99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS

// var nome = 'André';
//   console.log(window.nome)

(function () {
  var nome = 'André';
  console.log(nome);
})();

// Como podemos utilizar a
// função abaixo
const active = (callback) => callback();

active(() => {
  console.log('teste de active');
});
