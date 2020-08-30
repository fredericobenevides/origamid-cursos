
console.log(videogames[2]);

var ultimoItem = videogames.pop();

videogames.push('3DS');

console.log(videogames);

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

var videogames = ['Switch', 'PS4', 'XBOX'];

for (var i = 0; i < videogames.length; i++) {
  console.log(videogames[i]);
  if (videogames[i] === 'PS4') {
    break;
  }
}

videogames.forEach(function (item) {
  console.log(item);
});

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
