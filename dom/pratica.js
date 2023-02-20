const botao = document.getElementById('openModal');
const janela = document.querySelector('.modal-wrapper');

//adicionando evento nos elementos
botao.addEventListener('click', abrirJanela);
document.addEventListener('keydown', fecharJanela);

function abrirJanela(){
    janela.classList.remove('invisible');
}

function fecharJanela(event){
    //só adiciona a classe invisible se a janela estiver visível E a tecla pressionada for esc
    if(!janela.classList.contains('invisible') && event.key === 'Escape'){
        janela.classList.add('invisible');
    }
}

