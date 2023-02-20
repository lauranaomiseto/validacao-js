//createElement('tag')
const div1 = document.createElement('div');
div1.innerHTML = `<h2>Tópico 1</h2>`;
const div2 = document.createElement('div');
div2.innerHTML = `<h2>Tópico 2</h2>`;
const div3 = document.createElement('div');
div3.innerHTML = `<h2>Tópico 3</h2>`;
const div4 = document.createElement('div');
div4.innerHTML = `<h2>Tópico 4</h2>`;

//append prepend
const body = document.querySelector('body');
body.append(div1); //adiciona o elemento depois do úlitmo filho
body.prepend(div2);

//insertBefore(elementoInserir, elementoPosterior)
const label = body.querySelector('label');
body.insertBefore(div3, label);

//gambiarra pra fazer um insert after
const p = body.querySelector('p');
body.insertBefore(div4, p.nextElementSibling); //coloca div4 antes do próximo elemento de p, isto é, logo depois de p