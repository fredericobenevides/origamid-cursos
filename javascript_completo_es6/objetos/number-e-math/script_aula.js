console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false
console.log(Number.isNaN('5')); // false

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.6)); // false

console.log(parseFloat('32434.4343')); // 32434.4343
console.log(parseFloat('32434,4343')); // 32434

console.log(parseFloat('$32434,4343')); // NaN
console.log(parseFloat('32434,4343 reais')); // 32434.4343

console.log(parseInt(23.48)); // 23

const preco = 10.323232;
console.log(preco.toFixed()); // 10 retorna como string
console.log(preco.toFixed(2)); // 10.32

const preco2 = 2.99;
console.log(preco.toString(10));

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // R$ 48,49
console.log(valor);

console.log(Math.PI);

const Matematica = {
  PI: 3.14,
};

console.log(Matematica.PI);

console.log(Math.max(2, 3, 42, 5));
console.log(Math.min(2, 3, 42, 5));

console.log(Math.random());
console.log(Math.random() * 100);

console.log(Math.floor(Math.random() * (40 - 20 + 1)) + 20);
