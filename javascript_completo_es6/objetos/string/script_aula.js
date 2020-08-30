// const comida = 'Pizza';
// const agua = new String('Agua');
// const frase = 'A melhor comida';
// const linguagem = 'Javascript'

// console.log(comida);
// console.log(agua);

// console.log(comida.length);
// console.log(agua.length);

// console.log(frase[0]);
// console.log(frase[frase.length - 1]);

// console.log(frase.charAt(0));
// console.log(frase.charAt(frase.length - 1));

const frase = 'A melhor linguagem é ';
const linguagem = 'Javascript';
const fraseFinal = frase.concat(linguagem);
console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.includes(listaFrutas)); // false

console.log(fruta.startsWith('Ba')); // true
console.log(fruta.startsWith('ba')); // false
console.log(fruta.endsWith('na')); // true

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax
console.log(transacao3.slice(0, -2)); // Taxa de camis
console.log(transacao3.slice(-2)); // as
console.log(transacao3.slice(5)); // de camisas

console.log(fruta.indexOf('B')); // 0
console.log(fruta.indexOf('a')); // 1
console.log(fruta.indexOf('n')); // 2
console.log(fruta.lastIndexOf('n')); // 4
console.log(fruta.lastIndexOf('na')); // 4

const preco = 'R$ 99.00';
console.log(preco.padStart(15));
console.log(preco.padStart(15, '.'));
console.log(preco.padEnd(15, '.'));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((item) => {
  // console.log(item);
  console.log(item.padStart('10'));
});

const frase2 = 'Ta';
console.log(frase2.repeat(5));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saidas';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

console.log(listaItens);
const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');
console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join(', '));

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino'); // true
console.log(sexo2.toLowerCase() === 'feminino'); // true
console.log(sexo3.toLowerCase() === 'feminino'); // true

const valor = '    R$ 23.00     ';
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());
