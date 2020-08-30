import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2020 23:59:59 GMT-0300');

// console.log(diasParaONatal.days);
// console.log(diasParaONatal.hours);
// console.log(diasParaONatal._futureDate);
// console.log(diasParaONatal._timeStampDiff);

console.log(tempoParaONatal.total);

const tempoParaOAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');
console.log(tempoParaOAnoNovo.total);

// setInterval(() => {
//   console.log(tempoParaOAnoNovo.total);
// }, 1000);
