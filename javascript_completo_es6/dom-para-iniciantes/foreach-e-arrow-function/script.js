// Mostra no console cada parágrafo do site
const paragrafos = document.querySelectorAll('a');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostra o texto dos parágrafos no console

paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Coo corrigir os errors abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
