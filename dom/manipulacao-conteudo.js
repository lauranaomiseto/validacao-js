//MANIPULANDO CONTEÚDOS
//textContent
console.log('- textContent -----');
let elemento = document.querySelector('h1');
elemento.textContent += " incrível";
console.log(elemento.textContent);

//innerText
console.log('- innerText -----');
console.log(document.querySelector('.content').innerText);

//innerHTML: para inserir tags html diretamente no elemento através de js
console.log('- innerHTML -----');
elemento = document.querySelector('h1');
elemento.innerHTML += "<i> !!!</i>"

//value: manipulação de valores 
console.log('- value -----');
elemento = document.querySelector('input');
console.log(elemento.value);
elemento.value = "Valor definido no js";


//MANIPULANDO ATRIBUTOS
//setAttribute('atributo', 'valorAtributo'): adiciona atributo e valor de atributo ao elemento
document.querySelector('header').setAttribute('id', 'header'); //adiciona id="header" na tag <header> 
let header = document.querySelector('#header');
console.log(header);

//getAttribute('atributo'): retorna o valor do atributo especificado
console.log(header.getAttribute('id')); 

//removeAttribute('atributo'): remove o atributo especificado do elemento
console.log(header.getAttribute('class'));
header.removeAttribute('class');

//REMOVER OU ADICIONAR CLASSE ESPECÍFICA DA LISTA DE CLASSE DO ELEMENTO
//elemento.classList.remove('classe')