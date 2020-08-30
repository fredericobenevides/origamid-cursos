// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// h1.outerHTML = '<p>Novo título</p>';

// // console.log(h1.innerHTML);
// // console.log(animaisLista.innerHTML);
// // console.log(animaisLista.innerText);

// const lista = document.querySelector('.animais-lista');

// // console.log(lista.parentElement.parentElement);

// // console.log(lista.nextElementSibling);
// // console.log(lista.previousElementSibling);

// console.log(lista.children[0]);
// console.log(lista.children[lista.children.length - 1]);

// console.log(lista.querySelector('li:last-child'));
// // console.log(lista.childNodes);
// console.log(lista.previousSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// // animais.appendChild(titulo);

// const mapa = document.querySelector('.mapa');

// // contato.insertBefore(animais, mapa);

// // contato.removeChild(titulo);
// contato.replaceChild(lista, titulo);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('título');

// mapa.appendChild(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);
cloneh1.classList.add('azul');

faq.appendChild(cloneh1);
