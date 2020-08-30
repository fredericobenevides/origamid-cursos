// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String('Tipo 1'),
//   ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// // console.log(instrumentos[2]);
// console.log(precos[3]);

// console.log(dados[0]);
// console.log(dados[0].toLowerCase());

// dados[2]('Eu mesmo');
// console.log(dados[1][1]);

// const carros = new Array('Ford', 'Fiat', 'Honda');
// carros[2] = 'Ferrari';
// carros[20] = 'Kia';
// console.log(carros);

// const li = document.querySelectorAll('li');
// console.log(li);

// const arrayLi = Array.from(li);
// console.log(arrayLi);

// console.log(Array.isArray(li)); // false
// console.log(Array.isArray(arrayLi)); // true

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   2: 'Teste',
//   length: 3,
// };

// const objArray = Array.from(obj);
// console.log(objArray);

// console.log(Array.of(10)); // [10]
// console.log(Array(10)); // [empty + 10]

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas.length);

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();

// const idades = [32, 21, 33, 43, 1, 12, 8];
// idades.sort();

// console.log(instrumentos);
// console.log(idades);

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia'); // Retorna 5, tamanho da nova array
carros.push('Parati', 'Gol'); // Retorna 5, tamanho da nova array

// console.log(carros);

// console.log(carros.pop()); // Retira o último elemento
// console.log(carros.shift()); // Retira o primeiro elemento

// console.log(carros);

// console.log(carros.reverse()); // Reverte
// console.log(carros); // Mostra revertido

const carros2 = ['Kia', 'Ferrari', 'Ford', 'Fiat', 'VW', 'Parati', 'Gol'];
console.log(carros2);
console.log(carros2.splice(2, 2, 'Fusca'));
console.log(carros2);

const itensCopyWithin = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
console.log(itensCopyWithin);
console.log(itensCopyWithin.copyWithin(2, 0, 3));

console.log(['Item1', 'Item2', 'Item3', 'Itm4'].fill('Banana'));
console.log(['Item1', 'Item2', 'Item3', 'Itm4'].fill('Banana', 2));
console.log(['Item1', 'Item2', 'Item3', 'Itm4'].fill('Banana', 1, 2));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
console.log(linguagens.includes('css'));
console.log(linguagens.indexOf('js'));
console.log(linguagens.lastIndexOf('js'));

console.log(linguagens.join());
console.log(linguagens.join(' '));

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString);

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
// const cloneLinguagens = linguagens // apenas faz referencia
const cloneLinguagens = linguagens.slice(); // copia array
console.log(linguagens2.pop());
console.log(linguagens2);
console.log(linguagens2.slice(2));
console.log(cloneLinguagens);
