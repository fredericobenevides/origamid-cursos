// fetch('./dados.json')
//   .then((r) => r.json())
//   .then((json) => {
//     json.forEach((materia) => {
//       console.log(materia.aula);
//     });
//   });

fetch('./dados.json')
  .then((r) => r.text())
  .then((jsonText) => {
    const json = JSON.parse(jsonText);

    json.forEach((materia) => {
      console.log(materia.aula);
    });
  });

const configuracoes = {
  player: 'Google',
  tempo: 25.5,
  aula: '2.1 JavaScript',
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));

// const stringConfig = JSON.stringify(configuracoes);
// console.log(stringConfig);
