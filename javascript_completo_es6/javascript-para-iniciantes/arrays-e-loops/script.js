// Cria um array com os anos que o Brasil ganhou a copa
var brasilCampeao = [1959, 1969, 1970, 1994, 2002];

// Interaja com o array utilizando um loop, para mostrar
// no console a seguinte mensagem, 'o Brasil ganhou a copa de $ano'
for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com o loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'Pera') {
    break;
  }
}

// Coloque a última fruta do array acima em uma variavel
// sem remover a mesma do array
var ultimaFruta = frutas[frutas.length - 1];
console.log(frutas);
console.log(ultimaFruta);
