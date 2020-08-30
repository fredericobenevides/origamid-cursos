// const carro = {
//   marca: 'Honda',
//   ano: 2018,
// };

// const { marca, ano, portas } = carro;

// console.log(marca);
// console.log(ano);
// console.log(portas);

// const cliente = {
//   nome: 'André',
//   email: 'andre@teste.com',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Videos JS', 'Videos HTML'],
//     },
//     fisicas: {
//       cadernos: ['Cardeno 1'],
//     },
//   },
// };

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const {
//   digitais,
//   fisicas,
//   digitais: { livros, videos },
// } = cliente.compras;

// console.log(digitais);
// console.log(videos);

// const { nome: nomeAndre, email = 'fredbene@gmail.com' } = cliente;
// console.log(nomeAndre);
// console.log(email);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, terceira] = frutas;
// console.log(primeira);
// console.log(terceira);

// const [um, dois, tres] = ['Item1', 'item2', 'item3'];
// console.log(um);
// console.log(dois);

function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);
