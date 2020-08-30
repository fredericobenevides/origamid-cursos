// // function perimetroForma(lado, totalLados = 4) {
// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   // totalLados = totalLados || 4;
//   // const argArray = Array.from(arguments);
//   // argArray.forEach((arg) => {
//   //   console.log(arg);
//   // });
//   // console.log(arguments[3]);
//   console.log(listaArgumentos);
//   listaArgumentos.forEach((item) => {
//     console.log(item);
//   });

//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 20, 30, 'oi', 'teste'));
// // console.log(perimetroForma(10));

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(`${ganhador} ganhou o carro ${premio}`);
  });
}
// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

const ganhadores = ['Pedro', 'Marta', 'Maria', 'Beto'];
anunciarGanhadores('Carro', ...ganhadores);

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const todosOsNumeros = [3, 4, 5, 12, 3, 3, 24, 2, 3, 4];
const numeroMaximo = Math.max(...todosOsNumeros);
console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
console.log(btns);

const btnsArray = [...btns];
console.log(btnsArray);
