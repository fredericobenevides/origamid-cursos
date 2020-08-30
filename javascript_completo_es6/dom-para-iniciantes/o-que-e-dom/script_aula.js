
const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:43817/') {
  console.log('é igual');
}

const h1Selecionado = document.querySelector('h1');
const classes = h1Selecionado.classList;
console.log(h1Selecionado);
console.log(classes);

function callbackh1() {
  console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);
