const botoes = document.querySelector('#botoes');
const equacao = document.querySelector('#equacao');
const valor = document.querySelector('#valor');
let classe = 0; //indicam de qual classe foi a ultima tecla 

botoes.addEventListener('click', (evento) => {
    if(!evento.target.closest('button')) return;
    const valorTecla = evento.target.textContent;

    //ALGARISMOS
    if (evento.target.classList.contains('algarismo')) {

        if (valor.textContent === '0') {
            valor.textContent = valorTecla;
        }
        else if(classe === 'igual'){
            equacao.textContent = 0;
            valor.textContent = valorTecla;
        }
        else valor.textContent += valorTecla;

        classe = 'algarismo';
    }

    //OPERACOES
    else if (evento.target.classList.contains('operacao')) {
        console.log('ultima tecla: ' + classe);

        //ultimo digitado foi operador
        if(classe === 'operacao'){
            equacao.textContent = equacao.textContent.slice(0, -1) + valorTecla;
        }
        //ultimo digitado foi igual
        else if(classe === 'igual'){
            console.log('entrei igual');
            equacao.textContent = valor.textContent + valorTecla;
            valor.textContent = 0;
        }
        // equacao vazia
        else if (equacao.textContent === '0'){
            equacao.textContent = valor.textContent + valorTecla;
            valor.textContent = 0;
        }
        else{
            let resul = equacao.textContent + valor.textContent;
            console.log('a operacao é: ' + resul);
            equacao.textContent = eval(resul) + valorTecla;
            valor.textContent = 0;
        }

        classe = 'operacao';
    }

    //ACOES
    else if (evento.target.classList.contains('acao')) {

        if(classe === 'igual'){
            equacao.textContent = 0;
            valor.textContent = 0;
        }

        switch (evento.target.textContent) {
            case 'CE':
                valor.textContent = 0;
                break;
            case 'C':
                valor.textContent = 0;
                equacao.textContent = 0;
                break;
            case 'DEL':
                if(valor.textContent.length === 1){
                    valor.textContent = 0;
                }
                else{
                    valor.textContent = valor.textContent.slice(0, -1);
                }
                break;
            case '*(-1)':
                valor.textContent = valor.textContent * (-1);
                break;
            default: //'.'
                valor.textContent += valorTecla;

        }

        classe = 'acao';
    }

    //IGUAL
    else {
        if(equacao.textContent === '0'){
            equacao.textContent = valor.textContent + valorTecla;
        }
        else if (classe === 'operacao' || classe === 'igual'){
            valor.textContent = eval(equacao.textContent);
            equacao.textContent = equacao.textContent.slice(0, -1) + valorTecla;
        }
        else{
            let resul = equacao.textContent + valor.textContent;
            equacao.textContent += valor.textContent + valorTecla;
            valor.textContent = eval(resul);
        }

        classe = 'igual';
    }
});