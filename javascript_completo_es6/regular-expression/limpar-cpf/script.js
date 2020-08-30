const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatarCPF = (cpfs) => {
  // return cpfs.map((cpf) => {
  //   return limparCPF(cpf);
  // });
  return cpfs.map(limparCPF).map(construirCPF);
};

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);

  const cpfsFormatados = formatarCPF(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

// console.log(limparCPF('121.121.22233'));
// console.log(construirCPF('12112122233'));

// console.log(elementsInnerText(cpfs));

// const resultado = elementsInnerText(cpfs);

// console.log(formatarCPF(resultado));

substituirCPFS(cpfsList);

