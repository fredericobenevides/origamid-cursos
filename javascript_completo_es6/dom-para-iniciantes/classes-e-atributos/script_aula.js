
menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

// menu.className = 'ativo teste azul';
menu.className += ' vermelho';

// console.log(menu.classList);
console.log(menu.className);

const animais = document.querySelector('.animais');

// console.log(animais.attributes);
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
// console.log(img.getAttribute('src'));
// console.log(img.getAttribute('alt'));

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(srcImg);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};

carro.andar(32);

carro.portas = 20;
console.log(carro.portas);
