import ValidarCpf from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).iniciar();

// console.log(validarCpf.limpar('123.123.123-44'));
// console.log(validarCpf.construir('12312312344'));

// validarCpf.adicionarEvento();
