// const btn = document.querySelector('button');

// btn.addEventListener('click', handleClick);

// function handleClick() {
//   setTimeout(() => {
//     this.classList.add('active');
//   }, 1000);
// }

// function espera(texto) {
//   console.log(texto);
// }

// setTimeout(function () {
//   console.log('Testando');
//   // }, 1000);
// }, 0);

// // for (let i = 0; i < 20; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, 1000 * i);
// // }

// function loop(texto) {
//   console.log(texto);
// }

// setInterval(loop, 300, 'Passou 300ms');

// loop a cada segundo
let i = 0;
const meuloop = setInterval(() => {
  console.log(tempo++);
  if (tempo > 20) {
    clearInterval(meuloop);
  }
}, 300);
