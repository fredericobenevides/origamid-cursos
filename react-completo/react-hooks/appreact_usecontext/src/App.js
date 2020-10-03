import React from 'react';
import Produto from './Produto';
import Limpar from './Limpar';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
}

export default App;
