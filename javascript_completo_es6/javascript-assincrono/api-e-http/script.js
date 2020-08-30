// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// const url = 'https://jsonplaceholder.typicode.com/posts/2';
// const options = {
//   method: 'HEAD',
//   body: '{"title": "JavaScript"}',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// fetch(url, options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const url = 'https://jsonplaceholder.typicode.com/posts/2';
// const options = {
//   method: 'HEAD',
// };

// fetch(url, options).then((response) => {
//   response.headers.forEach(console.log);
// });

const url = 'https://www.google.com';
fetch(url).then((response) => {
  response.headers.forEach(console.log);
});
