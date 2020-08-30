// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;

// Liste 5 objetos browser
window;
history;
Document;
HtmlCollection;
NodeList;

// Liste 2 métodos, Propriedades ou Objetos
// presentes no Chrome  que não exnativosistem no firefox

if (typeof document.adoptNode === 'undefined') {
  console.log('não existe');
} else {
  console.log('existe');
}
