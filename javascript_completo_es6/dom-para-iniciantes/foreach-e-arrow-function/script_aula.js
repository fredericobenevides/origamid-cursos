// const imgs = document.querySelectorAll('img');
// console.log(imgs);

// let i = 0;
// imgs.forEach(function (item, index, array) {
//   // console.log(item, index);
//   console.log(array);
// });

const titulo = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulo);

console.log(titulo);
console.log(titulosArray);

titulosArray.forEach(function (item) {
  // console.log(item);
});

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});
