// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   // console.log(item, index, array);
//   console.log(item.toUpperCase());
// });

// const li = document.querySelectorAll('li');

// const retornoForEach = li.forEach((i, index) =>
//   i.classList.add('ativa' + index)
// );

// console.log(retornoForEach);

const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) => {
  return item.toUpperCase();
});

console.log(novaArray);
console.log(carros);

const numeros = [2, 4, 5, 6, 68];
const numerosX2 = numeros.map((n) => n * 2);

console.log(numeros);
console.log(numerosX2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'CSS 2',
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
console.log(tempoAulas);

function nomeAulas(aula) {
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);

const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item, index, array) => {
  // console.log(acumulador, item, index);
  return acumulador + item;
}, 0);

console.log(reduceAulas);

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior;
  } else {
    return atual;
  }
}, 0);

console.log(numeros2);
console.log(maiorNumero);

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas);

const frutas = ['Banana', 'Pêra', 'Uva'];

console.log(frutas);
const temUva = frutas.some((item) => {
  return item === 'Uva';
});

console.log(temUva); // true

const every = frutas.every((fruta) => {
  // return item === 'Uva';
  return fruta;
});

console.log(every);

const numeros3 = [6, 43, 22, 88, 101, 29];
console.log(numeros3);
const maiorQue3 = numeros3.every((n) => n >= 3);
console.log(maiorQue3);

const indexUva = frutas.findIndex((item) => {
  return item === 'Uva';
});

console.log(frutas);
console.log('Index: ', indexUva);

const findUva = frutas.find((item) => {
  return item === 'Uva';
});
console.log(frutas);
console.log('Find: ', findUva);

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
  return item;
});

console.log(arrayFrutas);

console.log(aulas);

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15;
});

console.log(maiores15);
