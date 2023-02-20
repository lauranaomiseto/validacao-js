//SELEÇÃO DE ELEMENTOS

//getElementById(): pega o elemento com o id indicado
console.log("- getElementById() -----");
const titulo = document.getElementById('blog-title');
console.log(titulo);


//getElementByClassName(): pega todos os elementos da classe indicada
console.log("- getElementByClassName() -----");
const conteudo = document.getElementsByClassName('content'); //retorna um HTMLCollection
console.log(conteudo);


//getElementsByTagName(): pega todos os elementos da tag indicada
console.log("- getElementsByTagName() -----");
console.log(document.getElementsByTagName('body')); //retorna um HTMLCollection


//querySelector(): pega apenas o primeiro elemento com o seletor css indicado (seletores css; ex: tag, .class, #id, [atributo], etc)
console.log("- querySelector() -----");
console.log(document.querySelector('.content')) //só pega o primeiro elemento com class=content
console.log(document.querySelector('[src]'));


//querySelectorAll(): pega todos os elementos com o seletor css indicado
console.log("- querySelectorAll() -----");
console.log(document.querySelectorAll('.content')); //retorna um NodeList
console.log(document.querySelectorAll('[src]')); //retorna um NodeList

/**
 * Qual a diferença entre um HTMLCollection e uma NodeList?
 * O nodelist tem operações como elemento.forEach()
 */