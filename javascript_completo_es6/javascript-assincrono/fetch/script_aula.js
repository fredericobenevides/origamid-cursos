// const doc = fetch('./doc.txt');

// doc
//   .then((r) => r.text())
//   .then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
//   });

// const cep = fetch('http://viacep.com.br/ws/01001000/json');
// cep
//   .then((r) => r.json())
//   .then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body.logradouro;
//   });

// const style = fetch('./style.css');
// style
//   .then((r) => r.text())
//   .then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     const style = document.createElement('style');
//     style.innerHTML = body;
//     conteudo.appendChild(style);
//   });

// const div = document.createElement('div');

// const sobre = fetch('./sobre.html');
// sobre
//   .then((r) => r.text())
//   .then((body) => {
//     div.innerHTML = body;
//     const titulo = div.querySelector('h1');

//     document.querySelector('h1').innerText = titulo.innerText;
//     console.log(titulo);
//   });

const cep = fetch('http://viacep.com.br/ws/01001000/json/');
// const cep = fetch('naoexiste');

cep.then((response) => {
  console.log(response.type);

  if (response.status === 404) {
    console.log('Página não existe');
  }
});
