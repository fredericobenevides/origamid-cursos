const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(numero) {
    this._numero = numero * 200;
  },
};

console.log(button.tamanho);

button.tamanho = 20;
console.log(button.tamanho);

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

console.log(frutas);

frutas.nova = 'uva';
console.log(frutas);

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'blue');
blueButton.element = 'a';

console.log(blueButton);
console.log(blueButton.element);
