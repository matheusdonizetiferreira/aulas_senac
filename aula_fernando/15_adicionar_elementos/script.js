var el = document.createElement('div');

el.classList = "div-criada";

console.log(el);

var container = document.querySelector('#container');

container.appendChild(el);

const subtitle = document.createElement('h3');
subtitle.innerText = "Olá Alunos";

//container.appendChild(subtitle);
container.prepend(subtitle);

var el2 = document.createElement('div');
el2.classList = "div-berfore"

var el3 = document.querySelector('#container .div-criada');

console.log(el3);

container.insertBefore(el2, el3);