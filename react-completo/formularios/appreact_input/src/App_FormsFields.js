import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'estado',
    type: 'text',
  },
];

const App = () => {
  // const [form, setForm] = React.useState({
  //   nome: '',
  //   email: '',
  //   senha: '',
  //   cep: '',
  //   numero: '',
  //   rua: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: '',
  // });

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {})
  );

  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} value={form[id]} onChange={handleChange} />
        </div>
      ))}

      {response && response.ok && <p>Formulário Enviado</p>}

      <button>Enviar</button>
    </form>
  );
};

export default App;
