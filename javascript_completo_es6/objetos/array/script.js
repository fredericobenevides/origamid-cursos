const comidas = ['Pizza', 'Franco', 'Carne', 'Macarrão'];

// Remova o prieiro valor de comidas e coloque em  uma variável
// Remove o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final do aarray
// Adicione 'Peixe' e 'Batata' ao início do array

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');

console.log(primeiroValor);
console.log(ultimoValor);
console.log(comidas);

const estudantes = ['Márcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();

console.log(estudantes);
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>
              `;
// Substitua section pro ul e div com li,
// utilizando split e join
html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remove o último carro, mas antes de remover
// salve o array original em outra variavel

const originalCarros = carros.slice();
originalCarros.pop();

console.log(originalCarros);
console.log(carros);
