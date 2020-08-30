var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log('É verdadeiro');
  var x = 10;
} else if (possuiDoutorado) {
  console.log('Possui doutorado');
} else {
  console.log('Não possui nada');
}

console.log(x);

// dados verdadeiros
var nome = 'André';
// var nome = 1;
// var nome = 5;
// var nome = {};

// dados falsos
// var nome;
// var nome = '';
// var nome = false;
// var nome = 0;
// var nome = NaN;
// var nome = null;
// var nome = undefined;

if (nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if (!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log('Não possui graduação');
}

console.log('truthy / false');
console.log('!true', !true);
console.log('!1', !1);
console.log("!''", !'');
console.log('!undefined', !undefined);
console.log("!!'  '", !!' ');
console.log("!!''", !!'');

console.log('equal');
console.log(10 == '10');
console.log(10 === '10');
console.log(10 != '10');
console.log(10 !== '10');

console.log('&&');
console.log('Gato' && 'Cão'); // retorna o cão pois ambos são true e retorna o último valor true
console.log(5 - 5 && 5 + 5);
console.log('Gato' && false);
console.log(5 <= 5 && 3 < 6);

console.log('||');
console.log('Gato' || 'Cão'); // retorna sempre o primeiro verdadeiro
console.log(5 - 5 || 5 + 5);
console.log('Gato' || false);
console.log(5 <= 5 || 3 < 6);

var corFavorita = 'Azul';
// var corFavorita = 'Vermelho';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  case 'Verde':
    console.log('Olhe para a floresta.');
    break;
  default:
    console.log('Feche os olhos');
}
