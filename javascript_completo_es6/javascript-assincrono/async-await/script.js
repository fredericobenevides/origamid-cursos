// async function puxarDados() {
//   try {
//     const responseDados = await fetch('./dados.json');
//     const jsonDados = await responseDados.json();

//     document.body.innerText = jsonDados.aula;
//     console.log(jsonDados);
//   } catch (erro) {
//     console.log(erro);
//   }
// }

async function puxarDados() {
  const responseDados = fetch('./dados.json');
  const responseClientes = fetch('./clientes.json');

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();

async function asyncSemPromise() {
  // await setTimeout(() => console.log('Depois de 1s'), 1000); // nao funciona
  setTimeout(() => console.log('Depois de 1s sem promise'), 1000);
  console.log('acabou sem promise');
}

asyncSemPromise();

async function asyncComPromise() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Depois de 1s com promise');
      resolve();
    }, 1000);
  });
  console.log('acabou com promise');
}

asyncComPromise();
