// function createButton(text) {
//   const numeroSecreto = 'j3kl32jfafa';

//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element,
//   });
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'Novo texto';
// btnVender.text = 'Novo texto';

// console.log(btnComprar, btnVender);

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  }

  console.log(this);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

// const designer = Pessoa('André');
const designer = new Pessoa('André');
console.log(designer);
