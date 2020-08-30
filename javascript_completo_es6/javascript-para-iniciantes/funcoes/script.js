// Cria uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}

console.log(
  'isTruthy:',
  isTruthy(''),
  isTruthy(null),
  isTruthy(false),
  isTruthy(0),
  isTruthy(undefined),
  isTruthy(' '),
  isTruthy('gato'),
  isTruthy(1)
);

// Cria uma função matemática que retorne o perímetro de um
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(3));

// Cria uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Frederico', 'Benevides'));

// Cria uma função que verifica se um número é par
function isEven(numero) {
  return numero % 2 === 0;
}

console.log(isEven(2));

// Cria uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

console.log(tipoDeDado('oi'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
  console.log('Frederico Benevides');
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} de total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);
