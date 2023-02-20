console.log("TIPOS DE DADOS:")


// STRING: precisa usar "" ou '' ou ``
console.log(`- STRINGS -----`)
console.log("'nossa!'")
console.log('o título do livro é: "blabla"')
console.log(`aspas duplas "" ou simples ''`)
// multilinhas e expressões dentro de strings com crases (apenas com crases!):
console.log(`

    laura ${1 + 1}

`)

// NUMBERS: inteiros, reais, not a number (nan) e infinity
console.log(`- NUMBERS -----`)
console.log(12.5 + 33) //soma
console.log(20 / "blabla") //not a number
console.log(20 + "blabla") //concatena
console.log(100 === Infinity) //verifica igualdade e retorna boolean
console.log(Infinity)

// BOOLEAN: 
console.log(`- BOOLEAN -----`)

// UNDEFINED: indefinido
console.log(`- UNDEFINED -----`)

// NULL: objeto sem conteúdo, diferente de undefined
console.log(`- NULL -----`)

// OBJECT: dado estrutural, com propriedades/atributos e funcionalidades/métodos
// {propriedade: "valor"}
console.log(`- OBJECT -----`)
console.log({
    name: "Laura",
    age: 20,
    walk: function(){
        console.log(`walking...`)
    }
})


//ARRAY: dado estrutural; vetor (agrupamento de dados)
// ["Laura", 20]
console.log(`- ARRAY -----`)
console.log([
    "Laura",
     20
    ])


/* 
Conforme o ECMAScript standard temos 9 tipos de dados:

Primitivos:
    - string;
    - number;
    - boolena;
    - undefined;
    - symbol;
    - bigint.

Estruturais:
    - object:
        - array;
        - map;
        - set;
        - date;
        - etc.
    - function

Primitivo Estrutural
    - null

*/