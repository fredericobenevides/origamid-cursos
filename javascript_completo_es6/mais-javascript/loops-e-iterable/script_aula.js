const frutas = ['Banana', 'Uva', 'Morango'];
const frase = 'Isso é Javascript';

for (const fruta of frutas) {
  console.log(fruta);
}

// for (const char of frase) {
//   console.log(char);
// }

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.style.color = 'blue';
}

console.log(...buttons);

// fetch('https://pokeapi.co/api/v2/pokemon/').then(({ headers }) =>
//   console.log(headers)
// );

const carro = {
  marca: 'Honda',
  ano: 2018,
};

// for (const chave of carro) { // não funciona pois não é iterável
//   console.log(chave);
// }

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: false,
  },
});

for (const key in carro) {
  console.log(key, carro[key]);
}

for (const f in frutas) {
  console.log(f, frutas[f]);
}

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for (const style of btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

let i = 0;
do {
  console.log(i++);
} while (i <= 5);
