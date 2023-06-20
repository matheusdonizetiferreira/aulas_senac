//Manipulando conteúdo
//textContent
//Conteúdo de texto do Elemento
const element = document.querySelector('h1')

 element.textContent = "Olá Devs";

 // Trocar o texto interno do seu Elemento html
 // innerText
 //element.innerText = "Dev Senac"

 // Trocar o conteúdo html do elemento
 // innerHtml
 element.innerHTML = "Olá <small>FrontEND</small>";

 //Manipular um elemento de um input
 const elementInput = document.querySelector('input');
 // console.log(elementInput.value)
 //popular um valor
 elementInput.value = "Valor que eu quiser";