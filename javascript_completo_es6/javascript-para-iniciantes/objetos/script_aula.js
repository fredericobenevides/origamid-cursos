var pessoa = {
  nome: 'André',
  idade: 28,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return lado * this.lados;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(20));
console.log(quadrado.cinco());

console.log(Math.random());

console.table(quadrado);

var height = 120;

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() {
    // return this.height / 2;
    return height / 2;
  },
};

console.log(menu);

menu.backgroundColor = '#000';
// menu.color = 'blue';

console.log(menu);

var bg = menu.backgroundColor;
console.log(bg);

console.log(menu.metadeHeight());

console.log(menu.hasOwnProperty('color'));
console.log(menu.hasOwnProperty('hasOwnProperty')); // retorna false, pq existe como heranção mas não no próprio objeto
