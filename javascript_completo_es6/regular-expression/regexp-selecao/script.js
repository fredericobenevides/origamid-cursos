const frase = 'JavaScript';
let regexp = /J/;
const fraseNova = frase.replace(regexp, 'B');

console.log(fraseNova);

regexp = /Pe/gi;
let texto = 'Perdeu perdido'.replace(regexp, 'Ba');
console.log(texto);

regexp = /[-.]/g;
texto = '111.222-333-44'.replace(regexp, '');
console.log(texto);

regexp = /[a-z]/g;
texto = 'JavaScript é a linguagem.'.replace(regexp, '0');
console.log(texto);

regexp = /[a-zA-Z]/g;
texto = 'JavaScript é a linguagem.'.replace(regexp, '0');
console.log(texto);

regexp = /[0-9]/g;
texto = '123.333.333-33'.replace(regexp, 'X');
console.log(texto);

regexp = /[^a-z]/g;
texto = 'Brasil é com z: Brazil'.replace(regexp, ' ');
console.log(texto);

regexp = /./g;
texto = 'JavaScript é a linguagem.'.replace(regexp, '0');
console.log(texto);

regexp = /\./g;
// regexp = /[.]/g;
texto = '123.333.333-33'.replace(regexp, '-');
console.log(texto);

regexp = /\w/g; // mesma coisa de [A-Za-z0-9_]
texto = 'Guarda-chuva R$ 23,00.'.replace(regexp, '-');
console.log(texto);

regexp = /\W/g;
texto = 'Guarda-chuva R$ 23,00.'.replace(regexp, '-');
console.log(texto);

regexp = /\d/g;
texto = '+55 (21) 2222- 2222 '.replace(regexp, '-');
console.log(texto);

regexp = /\D/g;
texto = '+55 (21) 2222- 2222 '.replace(regexp, '-');
console.log(texto);

regexp = /\s/g;
texto = 'Guarda-chuva R$ 23,00.'.replace(regexp, '-');
console.log(texto);

regexp = /\S/g;
texto = 'Guarda-chuva R$ 23,00.'.replace(regexp, '-');
console.log(texto);

// regexp = /aaaa/g;
regexp = /a{4}/g;
texto = 'Vaaaai ali por favor'.replace(regexp, '-');
console.log(texto);

regexp = /\d{2,3}/g;
texto = '222.333.222.42'.replace(regexp, 'X');
console.log(texto);

regexp = /\w{1,}/g;
texto = 'A melhor linguagem é JavaScript'.replace(regexp, 'X');
console.log(texto);

regexp = /\d+/g;
texto = '222.333.222.42'.replace(regexp, 'X');
console.log(texto);

regexp = /\w+/g;
texto = 'Dígitos, dados, desenhos, Dito, d'.replace(regexp, 'X');
console.log(texto);

regexp = /\w*/g;
texto = 'Dígitos, dados, desenhos, Dito, d'.replace(regexp, 'X');
console.log(texto);

regexp = /regexp?/g;
texto = 'Qual é o certo, regexp ou regex?'.replace(
  regexp,
  'regular expression'
);
console.log(texto);

regexp = /java/gi;
texto = 'Java não é JavaScript'.replace(regexp, 'X');
console.log(texto);

regexp = /\bjava\b/gi;
texto = 'Java não é JavaScript'.replace(regexp, 'X');
console.log(texto);

regexp = /\b\d+\b/gi;
texto = 'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexp, 'X');
console.log(texto);

regexp = /\B\d+\B/gi;
texto = '11_22 33-44 55é66 77e88'.replace(regexp, 'X');
console.log(texto);

regexp = /^\w+/g;
texto = `andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
console.log(texto);

regexp = /\w+$/g;
texto = `andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
console.log(texto);

regexp = /\n/g;
texto = `andre@origamid.com\ncontato@origamid.com`.replace(regexp, '---');
console.log(texto);

regexp = /\n/g;
texto = `andre@origamid.com
contato@origamid.com`.replace(regexp, '---');
console.log(texto);

regexp = /\u0040|\u00A9/g;
texto = `andre@origamid.com @`.replace(regexp, '---');
console.log(texto);

regexp = /Java/g;
texto = 'PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script');
console.log(texto);

regexp = /(\w+)@[\w.]+/g;
texto = 'andre@email.com.br'.replace(regexp, '$1@gmail.com');
console.log(texto);

regexp = /(ta)+/g;
texto = 'Tatata, tata, ta'.replace(regexp, 'Pá');
console.log(texto);

regexp = /\d(?=px)/g;
texto = '2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X');
console.log(texto);

regexp = /\d(?!px)/g;
texto = '2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X');
console.log(texto);

const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = ['00000-000', '00000 000', '00000000'];

for (cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000',
];

for (cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}

const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d/g;

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
];

for (cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}

const regexpTelefones = /(\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g;

const telefones = [
  '+55 11 98888-8888',
  '+55 (11) 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 988888888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888',
];

for (telefone of telefones) {
  console.log(telefone, telefone.match(regexpTelefones));
}

const regexpEmail = /[w.-]+@[w-]+.[w-.]+/gi;

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for (email of emails) {
  console.log(email, email.mach(regexpEmail));
}

const regexpTag = /<\/?[\w\s="']+\/?>/gi;

const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>',
];

for (tag of tags) {
  console.log(tag, tag.match(regexpTag));
}

const regexObj1 = new Regexp('\\w+', 'gi');
const regexObj1 = new Regexp(/\w+/, 'gi');

texto = 'JavaScript Linguagem 101'.replace(regexObj1, 'X');
console.log(texto);
