// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrerenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(Pessoa);

const andre = new Pessoa('André', 'Rafael');
console.log(andre.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Lista os construtores dos dados abaixo
const li = document.querySelector('li');

// Usando abaixo li.constructor.name
li; // HTMLLiElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined // Não existe li.click().constructor.name para null e undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
