//ALTERANDO ESTILOS
//style.propriedadeCss: permite adicionar css diretamente no html (método inline: <tag style="">; se no css a propriedade se chamava propriedade-css, no js ela estará como propriedadeCss (camel case); ex: background-color -> backgroundColor)
console.log('- style -----');
let elemento = document.querySelector('body');
elemento.style.backgroundColor = "#f9f3d2";
console.log(elemento.style.backgroundColor);

//classList: retorna um DOMTokenList uma lista de classes do elemento
console.log('- classList -----');
elemento = document.querySelector('h1');
//classList.add('classse1', 'classe2', ...): adiciona classe ao elemento
elemento.classList.add('red');
console.log(elemento.classList);
//classList.remove(): remove classe do elemento
//classList.toggle(): se a classe exisitir, remove, se não existir, adiciona
elemento = document.querySelector('label');
elemento.classList.add('green');
console.log(elemento.classList);