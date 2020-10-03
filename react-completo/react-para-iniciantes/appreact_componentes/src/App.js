import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

function App() {
  return (
    <section>
      <Teste />
      <Header />
      <Form />

      <Footer />
    </section>
  );
}

export default App;
