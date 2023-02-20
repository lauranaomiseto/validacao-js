//EX1: NOTAS
console.log(`- EX1: NOTAS -----`);

function nota(nota) {
    let A = nota >= 90 && nota <= 100, B = nota >= 80 && nota < 90, C = nota >= 70 && nota < 80, D = nota >= 60 && nota < 70, F = nota < 60 && nota >= 0;
    let notaFinal;
    if (A) notaFinal = 'A';
    else if (B) notaFinal = 'B';
    else if (C) notaFinal = 'C';
    else if (D) notaFinal = 'D';
    else if (F) notaFinal = 'F';
    else notaFinal = 'Nota inválida.';

    console.log(notaFinal);
}

nota(-90);

//EX2: FLUXO DE CAIXA
console.log(`- EX2: FLUXO DE CAIXA -----`);

function soma(vetor) {
    let total = 0;
    for (let valor of vetor) {
        total += valor;
    }
    return total;
}

function soma2(vetor) {
    let total = 0;
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i];
    }
    return total;
}

function gastos() { //não precisa informar o parametro objeto????????????
    let total = soma(relatorio.receitas) - soma2(relatorio.despesas); //!!!!!!!!!!!!!!!!!!!
    let saldo = 'negativo';
    if (total >= 0) saldo = 'positivo';
    console.log(`Saldo ${saldo}: ${total}`);
}

let relatorio = {
    receitas: [2000, 500, 600],
    despesas: [100, 40, 35, 800, 2000, 200]
}

gastos(relatorio);

//EX3: CELSIUS TO FAHRENHEIT
console.log(`- EX3: CELSIUS TO FAHRENHEIT -----`);

function conversao(graus) {
    const celsius = graus.toUpperCase().includes('C'), fahrenheit = graus.toUpperCase().includes('F');
    let valor, unidade;
    if (celsius) {
        unidade = 'F';
        valor = Number(graus.toUpperCase().replace("C", ""));
        valor = valor * 9/5 + 32;
    }
    else if (fahrenheit) {
        unidade = 'C';
        valor = Number(graus.toUpperCase().replace("F", ""));
        valor = (valor - 32) * 5 / 9;
    }
    else {
        throw new Error('Unidade não identificada.');
    }
    console.log(valor + unidade);
}

try {
    conversao("25c");
}
catch (erro) {
    console.log(erro);
}

//EX4: BUSCANDO DADOS EM ARRAYS
console.log(`- EX4: BUSCANDO DADOS EM ARRAYS -----`);

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
            {
                title: "blablabla",
                author: "blabla"
            }
        ],
    },
];


let numCategorias=booksByCategory.length;
console.log('Número de categorias: ' + numCategorias);
for (let categoria of booksByCategory) {
    console.log(`Livros da categoria "${categoria.category}"`);
    console.log(categoria.books.length);
}

function contarAutores(){
    let autores = [];

    for(let categoria of booksByCategory){
        for(let livro of categoria.books){
            if(!autores.includes(livro.author)){
                autores.push(livro.author);
            }
            
            //outra forma de verificar se um elemento já está na array
            // if(autores.indexOf(livro.author == -1)){
            //     autores.push(livro.author);
            // }
        }
    }

    console.log('Número de autores: ' + autores.length);
}

function livroPorAutor(autor){
    let livros = [];
    
    for(let categoria of booksByCategory){
        for(let livro of categoria.books){
            if(livro.author == autor){
                livros.push(livro.title);
            }
        }
    }

    console.log(`Livros de ${autor}: ${livros.join(", ")}`);

}

contarAutores();
livroPorAutor("Augusto Cury");