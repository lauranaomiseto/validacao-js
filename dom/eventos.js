/**
 * EVENTOS: 
 *  - ações que disparam funções;
 *  - indicados na tag html (quem dispara o evento) ou no js, por on_ (ex: onclick, ondrag, etc),;
 *  - certos eventos só funcionam pra certos tipos de elementos com certas funcionalidades.

 */

//INDICADO NO HTML --------------------
// em index.html: <h1 ondbclick="print()"> Meu blog</h1>
function doubleClick(){ //função disparada por double click na tag h1
    console.log('double clicked!');
}

//INDICADO NO JS --------------------
//addEventListener('tipoEvento', funcao): adiciona um "trigger" no elemento via js; EMPILHA AS FUNCIONALIDADES, ou seja, é possível executar diversas funções com um mesmo evento
const img = document.querySelector('img');
function mouseOver(){
    console.log('mouse hovered!');
}
img.addEventListener('mouseover', mouseOver); // observe que a função é chamada como atalho, isto é, sem "()"

//elemento.on_: diferentemente do addEventListener, só executa a última função relacionada a determinado evento
const input = document.querySelector('input');
//tova vez que a ação ocorrer no input, a função será invocada
input.onkeypress = function(){
    console.log('key pressed!');
}

const p = document.querySelector('p');
function click(){
    console.log('clicked!');
}
p.onclick = click;

//argumento 'event' nas funções invocadas por eventos: retorna um objeto evento, com diversas propriedades e funções
input.onkeydown = function(event){
    console.log(event);
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.value); //retorna o valor do elemento alvo (geralmente, o target é quem dispara a ação)
}
