// const contato = document.querySelector('#contato');
// const texto = document.querySelector('.texto');
// console.log(contato.elements.nome.value);

// function handleKeyUp(event) {
//   const target = event.target;
//   if (!target.checkValidity()) {
//     target.classList.add('invalido');
//     contato.nome.setCustomValidity('Esse campo é super importante');
//     target.nextElementSibling.innerText = target.validationMessage;
//   }

//   console.log(event.target.checkValidity());
//   console.log(event.target.value);
//   texto.innerText = event.target.value;
// }

// function handleKeyUp(event) {
//   if (event.target.checked) {
//     console.log(event.target.value);
//   }
//   document.body.style.backgroundColor = event.target.value;
// }

// contato.addEventListener('change', handleKeyUp);

const contato = document.querySelector('#contato');
const dados = {};

function handleChange(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}

contato.addEventListener('change', handleChange);
