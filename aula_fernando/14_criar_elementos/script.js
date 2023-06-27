const element = document.querySelector('h3');
// elemento pai
console.log(element.parentNode);
console.log(element.parentElement);

// elementos filhos
const elDaddy = document.querySelector('div');
console.log(elDaddy.childNodes);
console.log(elDaddy.children);
console.log(elDaddy.firstElementChild);
console.log(elDaddy.lastElementChild);

// Inserir elemento no body
// Criei um elemento <p>
var novoParagrafo  = document.createElement('p');
// Criando um texto para o <p>
var texto = document.createTextNode('Este é o conteúdo do parágrafo');
// Inserindo o texto no <p>
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

// Capturar o body
var body = document.querySelector('body');

body.appendChild(novoParagrafo)

// Nova criação do elemento span
var div = document.querySelector('#container');

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto span"));

div.appendChild(el);
console.log(el);