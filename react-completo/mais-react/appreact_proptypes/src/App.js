import React from 'react';
import Exemplo from './Exemplo';

function reducer(state, action) {
  switch (action) {
    case 'aumentar': {
      return state + 1;
    }
    case 'diminuir': {
      return state - 1;
    }
    default: {
      throw new Error('Error action não existe');
    }
  }
  // if (action === 'aumentar') {
  //   return state + 1;
  // }
  // if (action === 'diminuir') {
  //   return state - 1;
  // }

  // return new Error('Error action não existe');
}

function App() {
  // const [contar, setContar] = React.useState(0);

  // function aumentar() {
  //   setContar(contar + 1);
  // }

  // function diminuir() {
  //   setContar(contar - 1);
  // }

  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      {/* <button onClick={aumentar}>+</button> */}
      {/* <button onClick={diminuir}>-</button> */}
      {/* <p>{contar}</p> */}

      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>+</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
}

export default App;
