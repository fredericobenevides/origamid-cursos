// const regexp = /\w+/gi;

// const regexp1 = new RegExp('\\w+', 'gi');
// console.log(frase.replace(regexp1, 'X'));

// const regexp = /Java/g;
// const frase = 'JavaScript e Java Linguagem 101';

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase)); // true

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase)); // true

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase)); // false

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase)); // false

// let i = 1;
// while (regexp.test(frase)) {
//   console.log(i++, regexp.lastIndex);
// }

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 200';

// const regexp = /[A-Za-z]/g;

// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));

// let i = 1; while (regexp.exec(frase)) {
//   console.log(i++);
// }

// let regexpResult;
// while ((regexpResult = regexp.exec(frase)) !== null) {
//   console.log(regexpResult);
// }

// const resultados = frase.match(regexp);
// console.log(resultados);

// const resultados = frase.split(regexp);
// console.log(resultados);

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// // const regexp = /(?<=<\/?)\w+/g;
// const regexp = /<li/g;

// // const resultado = tags.replace(regexp, '$& ---');
// const resultado = tags.replace(regexp, '$& class="ativa"');
// console.log(resultado);

// const emails = `
// empresa@email.com
// contato@email.com
// suporte@email.com
// `;

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com
`;

const regexp = /(\w+@)([\w.]+)/g;

// const resultado = emails.replace(regexp, '$1gmail.com');
const resultado = emails.replace(regexp, function (...args) {
  console.log(args[2]);

  if (args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com.br';
  } else if (args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com.br';
  } else if (args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br';
  } else {
    return args[0];
  }
});
console.log(resultado);
