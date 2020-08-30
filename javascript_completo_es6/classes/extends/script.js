class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar() {
    console.log('acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }

  acelerar() {
    super.acelerar();
    console.log('acelerou rápido');
  }

  empinar() {
    console.log('Moto empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2, 'Gasolina', true);
honda.empinar();
honda.acelerar();
console.log(honda.combustivel);
console.log(honda.capacete);

const civic = new Veiculo(4);
civic.acelerar();
// honda.empinar(); // não funciona
