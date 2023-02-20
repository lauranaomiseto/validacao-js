//parentNode parentElement: pega elemento pai
console.log('- parentNode e parentElement -----');
let elemento = document.querySelector('h1');
console.log(elemento.parentNode);
console.log(elemento.parentElement);

//childNodes children: pega todos os elementos que são filhos imediatos. 
console.log('- childNodes e children -----');
elemento = document.querySelector('body');
console.log(elemento.childNodes); //retorna NodeList (inclui text (quebra de linha no arquivo html) e comentários)
console.log(elemento.children); //retorna HTMLCollection (não inclui as quebras de linha e os comentários)

//firtChild firstElementChild: pega o primeiro elemento filho 
console.log('- firstChild e firstElementChild -----');
console.log(elemento.firstChild); //pode retornar quebra de linhas e comentários
console.log(elemento.firstElementChild); //retorna somente tags

//lastChild lastElementChild
console.log('- lastChild e lastElementChild -----');
console.log(elemento.lastChild);
console.log(elemento.lastElementChild);

//nextSibling nextElementSibling
console.log('- nextSibling e nextelementSibling -----');
elemento = document.querySelector('header');
console.log(elemento.nextSibling); 
console.log(elemento.nextElementSibling);

//previousSibling previousElementSibling
console.log('- previousSibling e previousElementSibling -----');
// elemento = document.querySelector('label');
console.log(elemento.previousSibling); 
console.log(elemento.previousElementSibling);

